import { Text, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";

interface InputProps extends TextInputProps {
  label?: string;
  style?: any;
  type?: "input" | "textArea";
}

export function Input({ label, style, type = "input", ...rest }: InputProps) {
  const height = type === "input" ? 52 : 210;
  const textAlignVertical = type === "input" ? "center" : "top";

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={[styles.input, { height, textAlignVertical }]} {...rest} />
    </View>
  );
}
