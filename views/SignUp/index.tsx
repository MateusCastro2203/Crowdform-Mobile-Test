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
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const request = async () => {
    if (Spassword.length < 8)
      return Alert.alert("Minimum 8 characters in Password");
    await dispatch(putAccountData(accountValue));
    console.log(Semail, Spassword);
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
          keyboardType="email-address"
          onChangeText={(data) => setEmail(data)}
        />
      </S.InputContainer>
      <S.InputContainer>
        <S.label>Password</S.label>
        <S.TextInput
          placeholder="Minimum 8 characters"
          onChangeText={(data) => setPassWord(data)}
          secureTextEntry={true}
        />
      </S.InputContainer>
      <S.CheckBoxContainer>
        <S.CheckboxDesing
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
          color={toggleCheckBox ? "#770fdf" : undefined}
        />
        <S.CheckboxLabel>
          I am over 18 years of age and I have read and agree to the
          <S.CheckboxLabelClick onPress={() => console.log("oi")}>
            <S.CheckboxLabelBold> Terms of Service </S.CheckboxLabelBold>
          </S.CheckboxLabelClick>
          and
          <S.CheckboxLabelClick onPress={() => console.log("oi")}>
            <S.CheckboxLabelBold>Privacy policye</S.CheckboxLabelBold>
          </S.CheckboxLabelClick>
          .
        </S.CheckboxLabel>
      </S.CheckBoxContainer>
      <FormButton
        onPress={() => request()}
        label="Sign Up"
        disanbleValue={!toggleCheckBox}
      />
      <S.singUp onPress={() => navigation.navigate("Login")}>
        <S.singUpLabel>Already have an account? Log in Here</S.singUpLabel>
      </S.singUp>
    </S.Container>
  );
};
