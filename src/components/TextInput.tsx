import React, { useState } from "react";
import { TextInput as RNTextInput, TextInputProps, View } from "react-native";
import { colors } from "../style/styleConstants";
import { Icon, IconProps } from "../svg/icons/Icon";
import { Spacer } from "./Spacer";

interface CustomTextInputProps extends TextInputProps {
  iconRight?: boolean;
  rightIconName?: IconProps["name"];
}

export const TextInput = ({
  onFocus,
  style,
  iconRight,
  rightIconName,
  value,
  ...rest
}: CustomTextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const isRightIcon = iconRight && rightIconName;
  return (
    <View
      className="rounded-2xl my-2 px-5 flex-row justify-start items-center"
      style={[
        { backgroundColor: colors.disabledLight, height: 60 },
        isFocused ? { borderWidth: 1.5, borderColor: "black" } : undefined,
      ]}
    >
      {isRightIcon && (
        <Icon
          name={rightIconName}
          size={22}
          color={!!value ? colors.textDark : colors.disabled}
        />
      )}
      <Spacer small />

      <RNTextInput
        onFocus={() => setIsFocused(true)}
        onEndEditing={() => setIsFocused(false)}
        selectionColor={colors.textDark}
        style={[
          style,
          {
            flex: 1,
            paddingTop: 7,
            fontFamily: "Poppins-SemiBold",
          },
        ]}
        {...rest}
      ></RNTextInput>
    </View>
  );
};
