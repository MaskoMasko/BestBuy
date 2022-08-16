import React from "react";
import {
  TouchableOpacity,
  View,
  TouchableOpacityProps,
  ViewProps,
  StyleSheet,
} from "react-native";
import { Text } from "./Text";
import { colors, sizes } from "../style/styleConstants";

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  className?: ViewProps["className"];
  disabled?: boolean;
  outline?: boolean;
}

export const Button = ({
  className,
  style,
  outline,
  children,
  ...props
}: ButtonProps) => {
  const { onPress, title, ...otherProps } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      onPress={onPress}
      {...otherProps}
      style={{ flexDirection: "row" }}
    >
      <View
        className={className}
        style={[
          commonStyle.container,
          outline ? outlineStyle.container : defaultStyle.container,
        ]}
      >
        <Text style={outline ? outlineStyle.text : defaultStyle.text} semiBold>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const commonStyle = StyleSheet.create({
  container: {
    borderRadius: 100,
    flex: 1,
    padding: sizes.medium,
    margin: sizes.small,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
});

const defaultStyle = StyleSheet.create({
  container: {
    backgroundColor: colors.textDark,
  },
  text: {
    color: colors.textLight,
  },
});

const outlineStyle = {
  container: {
    backgroundColor: colors.textLightDark,
  },
  text: {
    color: colors.textDark,
  },
};
