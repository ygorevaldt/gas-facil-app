import { StyleProp, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  style?: StyleProp<ViewStyle>;
}

export function Button({ text, style, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity {...rest} style={[styles.container, style]} activeOpacity={0.7}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
