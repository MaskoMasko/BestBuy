import React, { ReactNode } from "react";
import {
  Keyboard,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ScreenProps {
  bottomInsets?: boolean;
  children: ReactNode;
}

//its not really a Screen its more like a View with white bg-color cuz tailwind trolls me :/
export const Screen = ({ children, bottomInsets }: ScreenProps) => {
  const screenHeight = useWindowDimensions().height;
  const insets = useSafeAreaInsets();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={{
          backgroundColor: "white",
          height: screenHeight + insets.bottom + insets.top,
        }}
      >
        {children}
        {/* i suppose height of the header + insets top is around 100, but it ain't correct */}
        {bottomInsets && <View style={{ height: 100 }}></View>}
      </View>
    </TouchableWithoutFeedback>
  );
};
