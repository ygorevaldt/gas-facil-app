import { colors } from "@/constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";

interface OptionProps extends PressableProps {
  text: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  isSelected: boolean;
}

export type OptionType = {
  text: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function Option({ text, icon, isSelected, ...rest }: OptionProps) {
  const iconColor = isSelected ? colors.white : colors.blue[500];
  const backgroundColor = isSelected ? colors.blue[500] : colors.white;
  const textColor = isSelected ? colors.white : colors.blue[500];

  return (
    <Pressable {...rest} style={[styles.container, { backgroundColor }]}>
      <MaterialIcons name={icon} size={16} color={iconColor} />
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </Pressable>
  );
}
