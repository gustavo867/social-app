import React from "react";
import { TextProps } from "react-native";
import styled from "styled-components/native";

interface Props {
  margin?: number;
  color?: string;
  padding?: number;
}

interface TitleProps extends TextProps {
  title?: boolean;
  large?: boolean;
  medium?: boolean;
  small?: boolean;
  tiny?: boolean;
  light?: boolean;
  semi?: boolean;
  bold?: boolean;
  heavy?: boolean;
  center?: boolean;
  right?: boolean;
  color?: string;
  padding?: number;
  margin?: number;
}

const TextStyle: React.FC<TitleProps> = ({ ...props }) => {
  return <Text {...props}>{props.children}</Text>;
};

const Text = styled.Text`
  color: ${(props: Props) => props.color ?? "#FFFFFF"};
  margin: ${(props: Props) => props.margin ?? 0};
  padding: ${(props: Props) => props.padding ?? 0};

  ${({ title, large, medium, small, tiny }: TitleProps) => {
    switch (true) {
      case title:
        return `font-size: 32px`;

      case large:
        return `font-size: 24px`;

      case medium:
        return `font-size: 16px`;

      case small:
        return `font-size: 13px`;

      case tiny:
        return `font-size: 11px`;

      default:
        return `font-size: 14px`;
    }
  }};

  ${({ light, semi, bold, heavy }: TitleProps) => {
    switch (true) {
      case light:
        return `font-weight: 200`;

      case semi:
        return `font-weight: 300`;

      case bold:
        return `font-weight: 600`;

      case heavy:
        return `font-weight: 700`;

      default:
        return `font-weight: 400`;
    }
  }};

  ${({ center, right }: TitleProps) => {
    switch (true) {
      case center:
        return `text-align: center`;

      case right:
        return `text-align: right`;

      default:
        return `text-align: left`;
    }
  }};
`;

export default TextStyle;
