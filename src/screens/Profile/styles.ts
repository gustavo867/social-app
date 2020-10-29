import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #13131a;
  align-items: center;
  padding-top: 64px;
`;

export const ProfilePhotoContainer = styled.View`
  elevation: 20;
`;

export const ProfilePhoto = styled.Image`
  width: 128px;
  height: 128px;
  border-radius: 64px;
`;

export const StatsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 32px;
  flex: 1;
`;

export const StatContainer = styled.View`
  align-items: center;
  flex: 1;
`;

export const Logout = styled.TouchableOpacity`
  margin-bottom: 32px;
`;
