import React from "react";
import { ViewProps } from "react-native";
import { View, StyleSheet } from "react-native";
import { colors } from "../../style/styleConstants";
import { Spacer } from "../Spacer";
import { Text } from "../Text";

interface OrDividerProps {
  fontSize?: number;
  title?: string;
}

export const OrDivider = ({ fontSize, title = "or" }: OrDividerProps) => {
  const dividerStyle: ViewProps["style"] = {
    marginBottom: resolveDividerHeight(),
  };
  function resolveDividerHeight() {
    if (!fontSize) return 15;
    else {
      return fontSize / 2;
    }
  }
  return (
    <View className="flex-row justify-evenly px-5">
      <View
        style={{
          borderBottomColor: colors.disabled,
          borderBottomWidth: StyleSheet.hairlineWidth,
          flex: 1,
          ...dividerStyle,
        }}
      />
      <Spacer extraSmall />
      <Text>{title}</Text>
      <Spacer extraSmall />

      <View
        style={{
          borderBottomColor: colors.disabled,
          borderBottomWidth: StyleSheet.hairlineWidth,
          flex: 1,
          ...dividerStyle,
        }}
      />
    </View>
  );
};
