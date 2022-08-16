import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  WelcomeScreen: undefined;
  InfoSliderScreen: undefined;
  PreLoginScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  MainScreen: undefined;
};
export type ScreenProps = NativeStackScreenProps<RootStackParamList>;
