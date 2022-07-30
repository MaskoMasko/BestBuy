import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { Router } from "./src/navigation/Router";

export default function App() {
  return (
    <TailwindProvider>
      <Router />
    </TailwindProvider>
  );
}
