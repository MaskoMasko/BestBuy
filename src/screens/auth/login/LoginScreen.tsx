import React, { useState } from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Button } from "../../../components/Button";
import { RegisterForm } from "../../../components/auth/register/RegisterForm";
import { OrDivider } from "../../../components/auth/OrDivider";
import { Screen } from "../../../components/Screen";
import { Spacer } from "../../../components/Spacer";
import { Text } from "../../../components/Text";
import { colors } from "../../../style/styleConstants";
import { Icon } from "../../../svg/icons/Icon";
import type { ScreenProps } from "../../../navigation/RouterTypes";

export const LoginScreen = ({ navigation }: ScreenProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRememberMe, setIsRememberMe] = useState(false);

  return (
    <Screen bottomInsets>
      <View className="justify-evenly flex-1">
        <View
          style={{
            height: 100,
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../../../assets/logo.png")}
            width={200}
            height={200}
          />
        </View>
        <Text semiBold className="text-2xl self-center">
          Login to Your Account
        </Text>
        <View className="px-5">
          <RegisterForm values={{ email, setEmail, password, setPassword }} />
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
          activeOpacity={0.5}
          onPress={() => setIsRememberMe(!isRememberMe)}
        >
          <Icon
            name={isRememberMe ? "checkbox-filled" : "checkbox-empty"}
            size={35}
            color={colors.textDark}
          />
          <Spacer extraSmall />
          <Text className="text-xs" semiBold>
            Remember me
          </Text>
        </TouchableOpacity>
        <View className="px-3">
          <Button
            title="Sign in"
            onPress={() => navigation.navigate("MainScreen")}
          />
        </View>
        <OrDivider title="or continue with" />
        <View className="flex-row justify-evenly">
          <View
            className="items-center justify-center rounded-md w-1/5"
            style={{
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: colors.disabled,
              height: 50,
            }}
          >
            <Icon name="facebook-icon" size={25} />
          </View>
          <View
            className="items-center justify-center rounded-md w-1/5"
            style={{
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: colors.disabled,
              height: 50,
            }}
          >
            <Icon name="google-icon" size={25} />
          </View>
          <View
            className="items-center justify-center rounded-md w-1/5"
            style={{
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: colors.disabled,
              height: 50,
            }}
          >
            <Icon name="apple-icon" size={25} />
          </View>
        </View>
        <View className="flex-row justify-center">
          <Text className="text-disabled">Don't have an account?</Text>
          <Spacer extraSmall />
          <Text onPress={() => navigation.navigate("RegisterScreen")} semiBold>
            Sign up
          </Text>
        </View>
      </View>
    </Screen>
  );
};
