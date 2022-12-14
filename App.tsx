import { useFonts } from "@expo-google-fonts/inter";
import React, { useEffect, useState } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Router } from "./src/navigation/Router";
import { LoadingScreen } from "./src/screens/loading/LoadingScreen";

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
  });

  useEffect(() => {
    //for coolness
    if (fontsLoaded) {
      setIsAppReady(true);
    }
  }, [fontsLoaded]);

  return (
    <SafeAreaProvider>
      {!isAppReady ? <LoadingScreen /> : <Router />}
    </SafeAreaProvider>
  );
}
