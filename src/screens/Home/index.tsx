import React from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import * as S from "./styles";

import Text from "../../components/Text";

import template from "../../utils/template";

interface User {
  username: string;
  profilePhotoUrl: string;
}

interface Item {
  id: number;
  user: User;
  postedAt: string;
  post: string;
  photoUrl: string;
  likes: number;
  comments: number;
}

const Home: React.FC = () => {
  const Item = (item: Item) => {
    return (
      <S.PostContainer>
        <S.PostHeader>
          <S.PostProfilePhoto source={{ uri: item.user.profilePhotoUrl }} />
          <S.PostInfo>
            <Text medium>{item.user.username}</Text>
            <Text tiny color="#c1c3cc" marginTop={4}>
              {item.postedAt}
            </Text>
          </S.PostInfo>
          <S.Options>
            <Entypo name="dots-three-horizontal" size={16} color="#73788b" />
          </S.Options>
        </S.PostHeader>

        <S.Post>
          <Text>{item.post}</Text>
          <S.PostPhoto source={{ uri: item.photoUrl }} />
          <S.PostDetails>
            <S.PostLikes>
              <Ionicons name="ios-heart-empty" size={24} color="#73788b" />
              <Text tiny marginLeft={8}>
                {item.likes}
              </Text>
            </S.PostLikes>

            <S.PostComments>
              <Ionicons name="ios-chatboxes" size={24} color="#73788b" />
              <Text tiny marginLeft={8}>
                {item.comments}
              </Text>
            </S.PostComments>
          </S.PostDetails>
        </S.Post>
      </S.PostContainer>
    );
  };

  return (
    <S.Container>
      <S.FeedContainer>
        <Text large light center>
          Feed
        </Text>

        <S.Feed
          data={template}
          renderItem={({ item }: any) => <Item {...item} />}
          keyExtractor={(item: any) => item.id.toString()}
        />
      </S.FeedContainer>
    </S.Container>
  );
};

export default Home;
