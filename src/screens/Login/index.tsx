import React, { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";
import firebase from "firebase";

import Text from "../../components/Text";
import Input from "../../components/Input";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loading, setLoading] = useState(false);

  const { navigate } = useNavigation();

  const OnSubmit = useCallback(async () => {
    setLoading(true);

    if (email && password) {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigate("Main");
    }

    setLoading(false);
  }, [password, email]);

  return (
    <S.Container>
      <S.Main>
        <Text title semi center>
          Welcome back
        </Text>
      </S.Main>

      <S.Auth>
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

      <S.SignInContainer onPress={OnSubmit} disabled={loading}>
        {loading ? (
          <S.Loading />
        ) : (
          <Text bold center>
            Sign in
          </Text>
        )}
      </S.SignInContainer>

      <S.SignUp onPress={() => navigate("Register")}>
        <Text small center>
          New to SocialApp?{"  "}
          <Text bold color="#8022d9">
            Sign up
          </Text>
        </Text>
      </S.SignUp>

      <S.HeaderGraphic>
        <S.RightCircle />
        <S.LeftCircle />
      </S.HeaderGraphic>
    </S.Container>
  );
};

export default Login;
