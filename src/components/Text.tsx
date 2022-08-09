import { Text as RNText, TextProps } from "react-native";

interface CustomTextProps extends TextProps {
  bold?: boolean;
  semiBold?: boolean;
}
export const Text = ({
  style,
  className,
  bold,
  semiBold,
  ...rest
}: CustomTextProps) => {
  const resolveFontWeight = () => {
    if (bold) return "Poppins-Bold";
    else if (semiBold) return "Poppins-SemiBold";
    return "Poppins-Regular";
  };
  const defaultTextStyle: TextProps["style"] = {
    fontFamily: resolveFontWeight(),
  };
  return (
    //so ako ne stavin className={className} me dela... what?
    <RNText className={className} style={[defaultTextStyle, style]} {...rest} />
  );
};
