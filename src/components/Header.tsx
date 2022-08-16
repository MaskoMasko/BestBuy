import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { sizes } from "../style/styleConstants";
import { Icon } from "../svg/icons/Icon";
import { Text } from "./Text";

export const Header = ({
  navigation,
  options,
  ...props
}: NativeStackHeaderProps) => {
  const insetsTop = useSafeAreaInsets().top;
  const backIconSize = 55;
  const title = options.title;
  return (
    <View
      className="px-5"
      style={{
        paddingTop: insetsTop + sizes.small,
      }}
    >
      <TouchableOpacity
        hitSlop={{ top: 15, left: 15, right: 15, bottom: 15 }}
        activeOpacity={0.3}
        onPress={() => navigation.goBack()}
        style={{ width: backIconSize }}
      >
        <Icon name="back-arrow" color="black" size={backIconSize} />
      </TouchableOpacity>
      {title && <Text>{title}</Text>}
    </View>
  );
};
