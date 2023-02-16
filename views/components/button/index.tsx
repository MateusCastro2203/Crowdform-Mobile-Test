import React from "react";
import * as S from "./styles";
interface ButtonProps {
  onPress: () => void;
  label: string;
}
export const FormButton: React.FC<ButtonProps> = ({ onPress, label }) => {
  return (
    <S.Button onPress={() => onPress()}>
      <S.Label>{label}</S.Label>
    </S.Button>
  );
};
