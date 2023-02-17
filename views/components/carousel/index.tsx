import React from "react";
import Carousel from "react-native-snap-carousel";
import { Dimensions } from "react-native";
import { GraficCard } from "../grafics-card";
import data from "../../../assets/data.json";
import { Text } from "react-native-elements";
const { width: screenWidth } = Dimensions.get("window");

export const CarouselComponent = () => {
  return (
    <Carousel
      layout={"default"}
      data={data.grapic}
      sliderWidth={screenWidth}
      itemWidth={screenWidth * 0.8}
      renderItem={({ item, index }) => <Text>{item.title}</Text>}
    />
  );
};
