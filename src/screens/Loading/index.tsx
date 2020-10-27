import React, { useContext, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import * as S from "./styles";

import Text from "../../components/Text";

import { UserContext } from "../../context/UserContext";
import { Firebase, FirebaseContext } from "../../context/FirebaseContext";
import { useNavigation } from "@react-navigation/native";

interface UserInfo {
  email: string;
  uid: string;
  username: string;
  profilePhoto: string;
}

const Loading: React.FC = () => {
  const [_, setUser]: any = useContext(UserContext);
  const firebase: Firebase = useContext<any>(FirebaseContext);

  const { navigate } = useNavigation();

  useEffect(() => {
    setTimeout(async () => {
      const user = firebase.getCurrentUser();

      if (user) {
        const userInfo: UserInfo = (await firebase.getUserInfo(
          user.uid
        )) as any;

        setUser({
          isLoggedIn: true,
          email: userInfo.email,
          uid: userInfo.uid,
          username: userInfo.username,
          profilePhotoUrl: userInfo.profilePhoto,
        });

        navigate("Main");
      } else {
        setUser((state: any) => ({ ...state, isLoggedIn: false }));

        navigate("Auth");
      }
    }, 500);
  }, []);

  return (
    <S.Container>
      <Text title>SocialApp</Text>
      <ActivityIndicator
        size="large"
        color="#FFFFFF"
        style={{ marginTop: 10 }}
      />
    </S.Container>
  );
};

export default Loading;
