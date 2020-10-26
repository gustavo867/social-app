import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: 20px;
  background-color: #13131a;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: "#FFFFFF",
  size: "small",
})``;

export const Main = styled.View`
  margin-top: 192px;
`;

export const Auth = styled.View`
  margin: 64px 32px 32px;
`;

export const AuthContainer = styled.View`
  margin-bottom: 32px;
`;

export const SignInContainer = styled.TouchableOpacity`
  margin: 0 32px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: #8022d9;
  border-radius: 6px;
`;

export const SignUp = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const HeaderGraphic = styled.View`
  position: absolute;
  width: 100%;
  top: -50px;
  z-index: -100;
`;

export const RightCircle = styled.View`
  background-color: #8022d9;
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 200px;
  right: -100px;
  top: -200px;
`;

export const LeftCircle = styled.View`
  background-color: #23a6d5;
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  left: -50px;
  top: -50px;
`;
