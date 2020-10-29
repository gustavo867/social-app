import React, { useCallback, useContext } from "react";
import * as S from "./styles";

import Text from "../../components/Text";
import { UserContext, UserInfo } from "../../context/UserContext";
import { Firebase, FirebaseContext } from "../../context/FirebaseContext";
import { useNavigation } from "@react-navigation/native";

const Profile: React.FC = () => {
  const [user, setUser]: UserInfo[] = useContext<any>(UserContext);
  const firebase: Firebase = useContext<any>(FirebaseContext);

  const { navigate } = useNavigation();

  const logOut = useCallback(async () => {
    const loggedOut = await firebase.logOut();

    if (loggedOut) {
      setUser((state: any) => ({ ...state, isLoggedIn: false }));

      navigate("Loading");
    }
  }, []);

  return (
    <S.Container>
      <S.ProfilePhotoContainer>
        <S.ProfilePhoto source={{ uri: user.profilePhotoUrl }} />
      </S.ProfilePhotoContainer>
      <Text medium bold margin={16}>
        {user.username}
      </Text>

      <S.StatsContainer>
        <S.StatContainer>
          <Text large light>
            21
          </Text>
          <Text small bold color="#c2c4cd">
            Posts
          </Text>
        </S.StatContainer>

        <S.StatContainer>
          <Text large light>
            981
          </Text>
          <Text small bold color="#c2c4cd">
            Followers
          </Text>
        </S.StatContainer>

        <S.StatContainer>
          <Text large light>
            63
          </Text>
          <Text small bold color="#c2c4cd">
            Following
          </Text>
        </S.StatContainer>
      </S.StatsContainer>

      <S.Logout onPress={logOut}>
        <Text medium bold color="#23a8d9">
          Log out
        </Text>
      </S.Logout>
    </S.Container>
  );
};

export default Profile;
