import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ViewToken,
} from "react-native";
import { colors } from "../../style/styleConstants";

//fonts and tailwind docs next time

export const InfoSliderScreen = () => {
  const { height, width } = Dimensions.get("window");
  const sliderData = [
    {
      id: 1,
      imagePath: require("../../../assets/info-slider-1.jpg"),
      text: "We provide high quality products just for you1",
    },
    {
      id: 2,
      imagePath: require("../../../assets/info-slider-2.jpg"),
      text: "We provide high quality products just for you2",
    },
    {
      id: 3,
      imagePath: require("../../../assets/info-slider-3.jpg"),
      text: "We provide high quality products just for you3",
    },
  ];
  const dots = new Array(sliderData.length).fill("");

  const [currentIndex, setCurrentIndex] = useState(0);
  const onViewRef = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      //if viewableItems[0].index = 0, it returns XD fml
      if (viewableItems[0].index === null) return;
      setCurrentIndex(viewableItems[0].index);
    }
  );
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });
  return (
    <>
      <FlatList
        data={sliderData}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
        renderItem={({ item: slide }) => {
          return (
            <ImageBackground
              style={{ height: height * 0.8, width }}
              source={slide.imagePath}
            ></ImageBackground>
          );
        }}
      ></FlatList>
      <View
        // className="top-0 absolute rounded-t h-30"
        style={{
          ...StyleSheet.absoluteFillObject,
          top: undefined,
          height: "30%",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          backgroundColor: "white",
        }}
      >
        <Text>{sliderData[currentIndex].text}</Text>
        <View className="flex-row">
          {dots.map((_, id) => {
            return (
              <View
                key={id}
                style={[
                  id === currentIndex
                    ? { backgroundColor: colors.textDark, width: 30 }
                    : { backgroundColor: colors.textLightDark, width: 10 },
                  { height: 10, margin: 2, borderRadius: 5 },
                ]}
              ></View>
            );
          })}
        </View>
      </View>
    </>
  );
};
