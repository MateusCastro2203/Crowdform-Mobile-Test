import React from "react";
import { Text } from "react-native";
import { LineChart } from "react-native-chart-kit";
import data from "../../../assets/data.json";
import * as S from "./styles";
export const GraficCard = () => {
  return (
    <>
      <S.Title>Founds</S.Title>

      <S.Contaier>
        {data.grapic.map((item) => (
          <S.Item>
            <LineChart
              data={{
                datasets: [
                  {
                    data: item.values,
                    strokeWidth: 2, // largura da linha
                  },
                ],
              }}
              width={140} // Largura do gráfico é a largura da tela
              height={145}
              chartConfig={{
                backgroundColor: "#ffffff",
                decimalPlaces: 0,
                color: (opacity = 0.5) => `rgba(255, 255, 233, ${opacity})`,
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
            <Text
              style={{
                position: "absolute",
                top: 10,
                left: 20,
                fontWeight: "bold",
                fontSize: 18,
                color: "white",
              }}
            >
              {item.title}
            </Text>
          </S.Item>
        ))}
      </S.Contaier>
    </>
  );
};
