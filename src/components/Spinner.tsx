import React from "react";
import { Wave } from "react-native-animated-spinkit";
import { colors } from "../style/styleConstants";

interface SpinnerProps {
  color?: string;
  size?: number;
}

export const Spinner = ({
  color = colors.themeColor,
  size = 50,
}: SpinnerProps) => {
  return <Wave color={color} size={size} />;
};
