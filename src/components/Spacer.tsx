import React from "react";
import { View, ViewStyle } from "react-native";
import { sizes } from "../style/styleConstants";

interface SpacerProps {
  extraSmall?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  extraLarge?: boolean;
}

export const Spacer = ({
  extraSmall,
  small,
  medium,
  large,
  extraLarge,
}: SpacerProps) => {
  const viewStyle: ViewStyle = {};
  if (extraSmall) viewStyle.padding = sizes.extraSmall;
  else if (small) viewStyle.padding = sizes.small;
  else if (medium) viewStyle.padding = sizes.medium;
  else if (large) viewStyle.padding = sizes.large;
  else if (extraLarge) viewStyle.padding = sizes.extraLarge;
  else viewStyle.padding = sizes.medium;

  return <View style={viewStyle} />;
};
