import React from "react";
import { View, ViewStyle } from "react-native";

interface SpacerProps {
  extraSmall?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  extraLarge?: boolean;
}

const sizes = {
  extraSmall: 4,
  small: 8,
  medium: 12,
  large: 16,
  extraLarge: 24,
};

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
