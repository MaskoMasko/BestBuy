import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomeScreen } from "../screens/welcome/WelcomeScreen";
import { TailwindProvider } from "tailwindcss-react-native";
import { InfoSliderScreen } from "../screens/welcome/InfoSliderScreen";
import { RegisterScreen } from "../screens/auth/register/RegisterScreen";
import { LoginScreen } from "../screens/auth/login/LoginScreen";
import { PreAuthScreen } from "../screens/auth/PreAuthScreen";
import { Header } from "../components/Header";
import type { RootStackParamList } from "./RouterTypes";
import { MainScreen } from "../screens/MainScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();
export const Router = () => {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator
          screenOptions={{ header: (props) => <Header {...props} /> }}
        >
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ title: "yes", headerShown: false }}
          />
          <Stack.Screen
            name="InfoSliderScreen"
            component={InfoSliderScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="PreLoginScreen" component={PreAuthScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
};
