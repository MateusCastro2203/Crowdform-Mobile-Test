import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert } from "react-native";
import { FormButton } from "../button";
import { store } from "../../../redux/store";
import * as S from "./styles";

export const LoginForm = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>();
  const [password, setPassWord] = useState<string>();

  const verifyUser = () => {
    const account = store.getState().account.data;
    if (!account.email) return Alert.alert("Please Sign Up");
    if (email === account.email) {
      if (password === account.password) {
        navigation.navigate("Home");
      }
    }
  };

  return (
    <S.Container>
      <S.Title>Login</S.Title>
      <S.InputContainer>
        <S.label>E-mail</S.label>
        <S.TextInput
          placeholder="energyFound@email.com"
          onChangeText={(data) => setEmail(data)}
        />
      </S.InputContainer>
      <S.InputContainer>
        <S.label>Password</S.label>
        <S.TextInput
          placeholder="Password"
          onChangeText={(data) => setPassWord(data)}
          secureTextEntry={true}
        />
      </S.InputContainer>
      <FormButton onPress={() => verifyUser()} label="Login" />
      <S.singUp onPress={() => navigation.navigate("SignUp")}>
        <S.singUpLabel>Don't have an account? Sign up here</S.singUpLabel>
      </S.singUp>
    </S.Container>
  );
};
