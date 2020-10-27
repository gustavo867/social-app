import React, { useContext } from "react";
import * as S from "./styles";

import Text from "../../components/Text";
import { UserContext, UserInfo } from "../../context/UserContext";
import { FirebaseContext } from "../../context/FirebaseContext";

const Profile: React.FC = () => {
  const [user, setUser]: UserInfo[] = useContext<any>(UserContext);
  const firebase = useContext(FirebaseContext);

  console.log(user);

  return (
    <S.Container>
      <S.ProfilePhotoContainer>
        <S.ProfilePhoto source={{ uri: user.profilePhotoUrl }} />
      </S.ProfilePhotoContainer>
    </S.Container>
  );
};

export default Profile;
