import React from "react";
import { Circle } from "react-native-animated-spinkit";
import { colors } from "../style/styleConstants";

interface SpinnerProps {
  color?: string;
  size?: number;
}

export const Spinner = ({
  color = colors.themeColor,
  size = 70,
}: SpinnerProps) => {
  return <Circle color={color} size={size} />;
};
