import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from "react-native";
import { Text } from "../../components/Text";
import { LinearGradient } from "expo-linear-gradient";

export const WelcomeScreen = () => {
  //why is there only useWindowDimensions hook and not screen smh...
  const { width, height } = Dimensions.get("screen");
  //as any for now
  const navigation = useNavigation() as any;

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("InfoSliderScreen")}
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.7)"]}
          style={styles.linearBackDrop}
        />
      </TouchableWithoutFeedback>
      <ImageBackground
        source={require("../../../assets/welcome.jpg")}
        resizeMode="cover"
        imageStyle={{
          width,
          height,
        }}
        style={{
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <View className="p-4 z-10">
          <Text className="text-4xl text-textLight" semiBold>
            Welcome to
          </Text>
          <Text className="text-6xl text-textLight py-3" bold>
            Best Buy
          </Text>
          <Text className="text-textLight pb-6">
            Best e-commerce app of the century for your daily needs!
          </Text>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  linearBackDrop: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 5,
  },
});
