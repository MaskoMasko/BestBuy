import React from "react";
import { Image, View } from "react-native";
import { Screen } from "../../components/Screen";
import { Spacer } from "../../components/Spacer";
import { Spinner } from "../../components/Spinner";

export const LoadingScreen = () => {
  return (
    <Screen>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../../assets/logo.png")}
          style={{ width: 350, height: 350 }}
        />
        <Spacer />
        <Spinner />
        <View></View>
      </View>
    </Screen>
  );
};
