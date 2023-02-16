import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { putAccountData } from "../../redux/slice";
import { useAppDispatch } from "../../redux/store";
import { TAccountData } from "../../redux/types";
import { FormButton } from "../components/button";
import { Alert } from "react-native";
import * as S from "./styles";

export const SignUp = () => {
  const navigation = useNavigation();
  const [Sname, setName] = useState<string>("");
  const [SlastName, setLastName] = useState<string>("");
  const [Semail, setEmail] = useState<string>("");
  const [Spassword, setPassWord] = useState<string>("");
  const accountValue: TAccountData = {
    name: Sname,
    email: Semail,
    lastName: SlastName,
    password: Spassword,
  };

  const dispatch = useAppDispatch();

  const request = async () => {
    await dispatch(putAccountData(accountValue));
    console.log("OI");
    navigation.navigate("Login");
    return Alert.alert("Success to Sign Up");
  };

  return (
    <S.Container>
      <S.Title>Create your account</S.Title>
      <S.InputContainer>
        <S.label>First Name</S.label>
        <S.TextInput
          placeholder="Your first name"
          onChangeText={(data) => setName(data)}
        />
      </S.InputContainer>
      <S.InputContainer>
        <S.label>Last Name</S.label>
        <S.TextInput
          placeholder="Your last name"
          onChangeText={(data) => setLastName(data)}
        />
      </S.InputContainer>
      <S.InputContainer>
        <S.label>Email</S.label>
        <S.TextInput
          placeholder="yourEmail@email.com"
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
      <FormButton onPress={() => request()} label="Sign Up" />
      <S.singUp onPress={() => navigation.navigate("SignUp")}>
        <S.singUpLabel>Don't have an account? Sign up here</S.singUpLabel>
      </S.singUp>
    </S.Container>
  );
};
