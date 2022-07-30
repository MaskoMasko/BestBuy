import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomeScreen } from "../screens/welcome/WelcomeScreen";
import { TailwindProvider } from "tailwindcss-react-native";

const Stack = createNativeStackNavigator();
export const Router = () => {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
};
