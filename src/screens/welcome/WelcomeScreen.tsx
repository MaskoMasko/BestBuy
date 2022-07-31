import { useNavigation } from "@react-navigation/native";
import React, { useState, useLayoutEffect } from "react";
import {
  Dimensions,
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { LoadingScreen } from "../loading/LoadingScreen";

export const WelcomeScreen = () => {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(false);
  //why is there only useWindowDimensions hook and not screen smh...
  const { width, height } = Dimensions.get("screen");
  //as any for now
  const navigation = useNavigation() as any;

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
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("InfoSliderScreen")}
    >
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
    </TouchableWithoutFeedback>
  );
};
