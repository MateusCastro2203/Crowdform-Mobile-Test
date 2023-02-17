import styled from "styled-components/native";

export const Container = styled.View`
  padding: 20px;
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom: 1px;
  border-color: #c9c9c9;
`;

export const Header = styled.View`
  flex-direction: row;
  padding-top: 40px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  align-items: center;
  font-size: 14px;
  line-height: 17px;
  margin-top: 5px;
  font-weight: 600;
`;

export const Label = styled.Text`
  margin-top: 13px;
  padding-bottom: 5px;
  color: #000000;
  font-size: 13px;
  line-height: 14px;
`;

export const ContainerLabel = styled.View`
  flex-direction: row;
`;

export const TotalValue = styled.Text`
  font-size: 24px;
`;
export const CostValuation = styled.Text`
  padding-top: 10px;
  font-size: 14px;
  line-height: 18px;
  color: #0fdf8f;
  font-weight: 400;
`;

export const RewardsButton = styled.View`
  flex-direction: row;
  background-color: #e5cbff;
  margin-left: 77px;
  padding: 8px 9px;
  width: 110px;
  height: 30px;
  border-radius: 4px;
`;
export const RewardsLabel = styled.Text`
  color: #770fdf;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
`;
export const Card = styled.View`
  width: 100%;
  height: 105px;
  background-color: #770fdf;
  border-radius: 10px;
  flex-direction: row;
`;
export const CardContainer = styled.View`
  width: 50%;
  flex-direction: column;
  padding: 20px;
`;
export const CardTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
`;
export const CardSubTitle = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
`;
