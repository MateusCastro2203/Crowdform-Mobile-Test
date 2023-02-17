import React from "react";
import * as S from "./styles";
interface ButtonProps {
  onPress: () => void;
  label: string;
  disanbleValue?: boolean;
}
export const FormButton: React.FC<ButtonProps> = ({
  onPress,
  label,
  disanbleValue,
}) => {
  return (
    <S.Button
      onPress={() => onPress()}
      disabled={disanbleValue}
      style={{ backgroundColor: disanbleValue ? "#BD80FA" : "#770fdf" }}
    >
      <S.Label>{label}</S.Label>
    </S.Button>
  );
};
