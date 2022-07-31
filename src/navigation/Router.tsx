import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomeScreen } from "../screens/welcome/WelcomeScreen";
import { TailwindProvider } from "tailwindcss-react-native";
import { InfoSliderScreen } from "../screens/welcome/InfoSliderScreen";

const Stack = createNativeStackNavigator();
export const Router = () => {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="InfoSliderScreen"
            component={InfoSliderScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
};
