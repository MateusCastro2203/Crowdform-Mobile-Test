import styled from "styled-components/native";

export const Container = styled.View`
  padding: 20px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  margin-top: 20px;
  padding-bottom: 70px;
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
