import { colors } from "@/constants/colors";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { StyleProp, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import { styles } from "./styles";

type MaterialCommunityIconsType = keyof typeof MaterialCommunityIcons.glyphMap;
type MaterialIcons = keyof typeof MaterialIcons.glyphMap;
interface ButtonProps extends TouchableOpacityProps {
  text: string;
  style?: StyleProp<ViewStyle>;
  icon?: MaterialCommunityIconsType | MaterialIcons;
}

export function Button({ text, style, icon, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity {...rest} style={[styles.container, style]} activeOpacity={0.7}>
      {icon && (
        <MaterialCommunityIcons
          name={icon as MaterialCommunityIconsType}
          color={colors.white}
          size={24}
        />
      )}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
