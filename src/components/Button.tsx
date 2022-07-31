import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export const Button = (props: ButtonProps) => {
  const { onPress, title, ...otherProps } = props;
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress} {...otherProps}>
      <View>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
