import styled from "styled-components/native";
import Checkbox from "expo-checkbox";

export const Container = styled.View`
  padding: 20px;
  justify-content: space-between;
  background-color: #f5f5f5;
`;

export const Title = styled.Text`
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  margin-top: 10px;
  padding-bottom: 30px;
  font-weight: bold;
`;

export const InputContainer = styled.View`
  flex-direction: column;
`;
export const label = styled.Text`
  margin-top: 13px;
  padding-bottom: 5px;
  color: #a0a0a0;
  font-size: 11px;
  line-height: 14px;
`;

export const TextInput = styled.TextInput`
  height: 48px;
  width: 335px;
  background-color: #dfdfdf;
  border-radius: 4px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const singUp = styled.TouchableOpacity`
  padding-top: 10px;
  height: 50px;
  align-items: center;
`;
export const singUpLabel = styled.Text`
  margin-top: 13px;
  padding-bottom: 5px;
  color: #a0a0a0;
  font-size: 13px;
  line-height: 14px;
`;
export const CheckBoxContainer = styled.View`
  flex-direction: row;
`;
export const CheckBoxLabelContainer = styled.View`
  flex-direction: column;
`;
export const CheckboxDesing = styled(Checkbox)`
  margin-top: 10px;
`;
export const CheckboxLabel = styled.Text`
  margin-top: 10px;
  margin-right: 20px;
  margin-left: 10px;
  font-size: 12px;
  color: #a0a0a0;
`;

export const CheckboxLabelClick = styled.TouchableOpacity``;
export const CheckboxLabelBold = styled.Text`
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
`;
