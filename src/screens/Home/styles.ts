import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #13131a;
  padding-top: 64px;
`;

export const FeedContainer = styled.View``;

export const Feed = styled.FlatList``;

export const PostContainer = styled.View`
  margin: 16px 16px 0 16px;
  background-color: #141414;
  border-radius: 6px;
  padding: 8px;
`;

export const PostHeader = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
  align-items: center;
`;

export const PostProfilePhoto = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

export const PostInfo = styled.View`
  flex: 1;
  margin: 0 16px;
`;

export const Options = styled.View``;

export const Post = styled.View`
  margin-left: 64px;
`;

export const PostPhoto = styled.Image`
  width: 100%;
  height: 150px;
  border-radius: 6px;
`;

export const PostDetails = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const PostLikes = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PostComments = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 16px;
`;
