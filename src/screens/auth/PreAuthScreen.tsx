import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "../../components/Button";
import { OrDivider } from "../../components/auth/OrDivider";
import { Screen } from "../../components/Screen";
import { Spacer } from "../../components/Spacer";
import { Text } from "../../components/Text";
import { colors } from "../../style/styleConstants";
import { Icon } from "../../svg/icons/Icon";
import { PreLoginScreenIllustration } from "../../svg/svg-illustrations/PreLoginScreenIllustration";
import type { ScreenProps } from "../../navigation/RouterTypes";

export const PreAuthScreen = ({ navigation }: ScreenProps) => {
  return (
    //with className views bg doesn't change to white, but other colors work, What!?
    <Screen bottomInsets>
      <View className="justify-around items-center flex-1">
        <View
          className="rounded-full overflow-hidden items-center justify-center "
          style={{ height: 250, width: 250 }}
        >
          <PreLoginScreenIllustration size={300} />
        </View>
        <Text bold className="text-3xl">
          Let's get you in!
        </Text>
        <View className="w-5/6">
          <View
            className="flex-row items-center justify-center mx-0 rounded-md my-1"
            style={{
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: colors.disabled,
              height: 50,
            }}
          >
            <Icon name="facebook-icon" size={25} />
            <Spacer small />
            <Text>Continue with Facebook</Text>
          </View>
          <View
            className="flex-row items-center justify-center mx-0 rounded-md my-1"
            style={{
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: colors.disabled,
              height: 50,
            }}
          >
            <Icon name="google-icon" size={40} />
            <Spacer small />
            <Text>Continue with Google</Text>
          </View>
          <View
            className="flex-row items-center justify-center mx-0 rounded-md my-1"
            style={{
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: colors.disabled,
              height: 50,
            }}
          >
            <Icon name="apple-icon" size={30} />
            <Spacer small />
            <Text>Continue with Apple</Text>
          </View>
        </View>
        <OrDivider />
        <Button
          onPress={() => navigation.navigate("LoginScreen")}
          title="Sign in with password"
          className="mx-6"
        />
        <View className="flex-row">
          <Text className="text-disabled">Don't have account?</Text>
          <Spacer extraSmall />
          <Text onPress={() => navigation.navigate("RegisterScreen")} semiBold>
            Sign up
          </Text>
        </View>
      </View>
    </Screen>
  );
};
