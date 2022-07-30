import React from "react";
import { Image, View } from "react-native";
import { Spacer } from "../../components/Spacer";
import { Spinner } from "../../components/Spinner";

export const LoadingScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../../../assets/logo_transparent.png")}
        style={{ width: 350, height: 350 }}
      />
      <Spacer />
      <Spinner />
      <View></View>
    </View>
  );
};
