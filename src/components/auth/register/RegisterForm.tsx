import { KeyboardAvoidingView, View } from "react-native";
import { TextInput } from "../../TextInput";
import { colors } from "../../../style/styleConstants";

interface RegisterFormProps {
  values: {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
  };
}

export const RegisterForm = ({ values }: RegisterFormProps) => {
  const { email, password, setEmail, setPassword } = values;

  return (
    <View>
      <KeyboardAvoidingView behavior="height">
        <TextInput
          placeholder="Email"
          textContentType="emailAddress"
          placeholderTextColor={colors.disabled}
          onChangeText={setEmail}
          value={email}
          iconRight
          rightIconName="mail"
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={colors.disabled}
          onChangeText={setPassword}
          value={password}
          iconRight
          rightIconName="lock"
          textContentType="password"
          secureTextEntry
        />
      </KeyboardAvoidingView>
    </View>
  );
};
