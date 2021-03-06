import React, { useCallback, useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Platform } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Firebase, FirebaseContext } from "../../context/FirebaseContext";
import { UserContext } from "../../context/UserContext";

import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import * as S from "./styles";

import Text from "../../components/Text";
import Input from "../../components/Input";

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [username, setUserName] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState<string>();

  const firebase = useContext<Firebase | any>(FirebaseContext);
  const [_, setUser]: any = useContext(UserContext);

  const { navigate } = useNavigation();

  const signUp = useCallback(async () => {
    setLoading(true);

    const user = {
      username,
      email,
      password,
      profilePhoto,
    };

    try {
      const createUser = await firebase.createUser(user);

      setUser({
        ...createUser,
        isLoggedIn: true,
      });
    } catch (error) {
      console.log("Error @signUp", error);
    } finally {
      setLoading(false);
    }
  }, [password, email, username, profilePhoto]);

  async function getPermissions() {
    if (Platform.OS !== "web") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      return status;
    }
  }

  async function pickImage() {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.cancelled) {
        setProfilePhoto(result.uri);
      }
    } catch (error) {
      console.log("Error @pickImage:", error);
    }
  }

  const addProfilePhoto = useCallback(async () => {
    const status = await getPermissions();

    if (status !== "granted") {
      alert("We need permission to access your camera roll.");

      return;
    }

    pickImage();
  }, []);

  return (
    <S.Container>
      <S.KeyBoardContainer behavior="position">
        <S.Main>
          <Text title semi center>
            Sign up to get started
          </Text>
        </S.Main>

        <S.ProfilePhotoContainer onPress={addProfilePhoto}>
          {profilePhoto ? (
            <S.ProfilePhoto source={{ uri: profilePhoto }} />
          ) : (
            <S.DefaultProfilePhoto>
              <AntDesign name="plus" size={24} color="#FFFFFF" />
            </S.DefaultProfilePhoto>
          )}
        </S.ProfilePhotoContainer>

        <S.Auth>
          <S.AuthContainer>
            <Input
              label="Username"
              autoCapitalize="none"
              autoCorrect={false}
              value={username}
              onChangeText={(text) => setUserName(text.trim())}
            />
          </S.AuthContainer>

          <S.AuthContainer>
            <Input
              label="Email Address"
              autoCapitalize="none"
              autoCompleteType="email"
              autoCorrect={false}
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => setEmail(text.trim())}
            />
          </S.AuthContainer>

          <S.AuthContainer>
            <Input
              label="Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text.trim())}
            />
          </S.AuthContainer>
        </S.Auth>

        <S.SignUpContainer onPress={signUp} disabled={loading}>
          {loading ? (
            <S.Loading />
          ) : (
            <Text bold center>
              Sign Up
            </Text>
          )}
        </S.SignUpContainer>

        <S.SignIn onPress={() => navigate("Login")}>
          <Text small center>
            Already have an account?{"  "}
            <Text bold color="#8022d9">
              Sign In
            </Text>
          </Text>
        </S.SignIn>

        <S.HeaderGraphic>
          <S.RightCircle />
          <S.LeftCircle />
        </S.HeaderGraphic>
      </S.KeyBoardContainer>
    </S.Container>
  );
};

export default Register;
