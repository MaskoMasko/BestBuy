import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  View,
  ViewToken,
} from "react-native";
import { Button } from "../../components/Button";
import { Screen } from "../../components/Screen";
import { Text } from "../../components/Text";
import type { ScreenProps } from "../../navigation/RouterTypes";
import { colors } from "../../style/styleConstants";

//fonts and tailwind docs next time

export const InfoSliderScreen = ({ navigation }: ScreenProps) => {
  const { height, width } = Dimensions.get("window");
  const sliderData = [
    {
      id: 1,
      imagePath: require("../../../assets/info-slider-1.jpg"),
      text: "We provide high quality products just for you",
    },
    {
      id: 2,
      imagePath: require("../../../assets/info-slider-2.jpg"),
      text: "Your satisfaction is our number one priority",
    },
    {
      id: 3,
      imagePath: require("../../../assets/info-slider-3.jpg"),
      text: "Let's fulfill your house needs with Best Buy right now!",
    },
  ];
  const dots = new Array(sliderData.length).fill("");

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList | null>(null);
  const onViewRef = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      //if viewableItems[0].index = 0, it returns XD fml
      if (viewableItems[0].index === null) return;
      setCurrentIndex(viewableItems[0].index);
    }
  );
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });
  return (
    <Screen>
      <FlatList
        ref={flatListRef}
        data={sliderData}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
        renderItem={({ item: slide, index }) => {
          return (
            <>
              {index === currentIndex && (
                <ImageBackground
                  style={{ height: height * 0.65, width }}
                  source={slide.imagePath}
                ></ImageBackground>
              )}
            </>
          );
        }}
      ></FlatList>
      <View
        // className="top-0 absolute rounded-t h-30"
        style={{
          ...StyleSheet.absoluteFillObject,
          top: undefined,
          height: "40%",
          backgroundColor: "white",
        }}
        className=" items-center justify-center"
      >
        <Text semiBold className="text-3xl px-3 text-center">
          {sliderData[currentIndex].text}
        </Text>
        <View className="flex-row py-6">
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
        <View className="flex-row">
          <View className="flex-1 px-10">
            <Button
              title={
                currentIndex === sliderData.length - 1 ? "Get Started" : "Next"
              }
              onPress={() => {
                if (currentIndex + 1 > sliderData.length - 1)
                  return navigation.navigate("PreLoginScreen");
                flatListRef.current?.scrollToIndex({
                  index: currentIndex,
                });
                setCurrentIndex(currentIndex + 1);
              }}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
};
