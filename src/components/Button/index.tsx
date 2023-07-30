import React from "react";
import { ActivityIndicator } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import { Container, ButtonText } from "./styles";

interface ButtonProps extends RectButtonProps {
  children: string;
  loading?: boolean;
  iconName?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  iconName,
  ...rest
}) => {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator color="#FFF" />
      ) : (
        <>
          {iconName && <Icon name={iconName} size={24} color="#FFF" />}
          <ButtonText>{children}</ButtonText>
        </>
      )}
    </Container>
  );
};
