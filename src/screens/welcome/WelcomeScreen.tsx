import React, { useEffect, useState, useLayoutEffect } from "react";
import { Dimensions, ImageBackground, Text, View } from "react-native";
import { LoadingScreen } from "../loading/LoadingScreen";

export const WelcomeScreen = () => {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(false);
  //why is there only useWindowDimensions hook and not screen smh...
  const { width, height } = Dimensions.get("screen");

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      setShowWelcomeScreen(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  if (!showWelcomeScreen) {
    return <LoadingScreen />;
  }
  return (
    <ImageBackground
      source={require("../../../assets/welcome.jpg")}
      resizeMode="cover"
      imageStyle={{
        width,
        height,
        justifyContent: "flex-end",
      }}
    >
      <View>
        <Text className="text-themeColor">Welcome to</Text>
        <Text> Best Buy</Text>
        <Text>Best e-commerce app of the century for your daily needs!</Text>
      </View>
    </ImageBackground>
  );
};
