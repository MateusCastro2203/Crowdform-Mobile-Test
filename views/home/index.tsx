import React from "react";
import { Icon } from "react-native-elements";

import * as S from "./styles";
import { GraficCard } from "../components/grafics-card";
import Svg, { Path } from "react-native-svg";

export const Home = () => {
  return (
    <>
      <S.Container>
        <S.Header>
          <Icon name="user" type="font-awesome" color="#000000" />
          <S.Title>Account: $1,457.23</S.Title>
          <Icon name="bell-o" type="font-awesome" color="#000000" />
        </S.Header>
        <S.Label>Portifolio</S.Label>
        <S.ContainerLabel>
          <S.TotalValue>$1,245.23</S.TotalValue>
          <Icon
            name="trending-up"
            type="material-icon"
            style={{ top: 13, marginLeft: 2 }}
            size={14}
            color="#0fdf8f"
          />
          <S.CostValuation>31.82%</S.CostValuation>
          <S.RewardsButton>
            <Icon
              name="euro-symbol" // I dont found the icon name
              type="material-icon"
              style={{ marginLeft: 2 }}
              size={14}
              color="#770FDF"
            />
            <S.RewardsLabel>Earn Rewards</S.RewardsLabel>
          </S.RewardsButton>
        </S.ContainerLabel>
      </S.Container>
      <S.Container>
        <GraficCard />
      </S.Container>
      <S.Card>
        <S.CardContainer>
          <S.CardTitle>Learn more about carbon credits</S.CardTitle>
          <S.CardSubTitle>Check out our top tips!</S.CardSubTitle>
        </S.CardContainer>
        <S.CardContainer>
          <Svg></Svg>
        </S.CardContainer>
      </S.Card>
    </>
  );
};
