import React from "react";
import { TextInputProps, View } from "react-native";
import styled from "styled-components/native";

interface Props extends TextInputProps {
  label: string;
}

const Input: React.FC<Props> = ({ label, ...props }) => {
  return (
    <View>
      <Title>{label}</Title>
      <Field {...props} />
    </View>
  );
};

const Title = styled.Text`
  color: #fff;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 300;
`;

const Field = styled.TextInput`
  border-bottom-color: #ccc;
  border-bottom-width: 0.5px;
  height: 48px;
  color: #fff;
`;

export default Input;
