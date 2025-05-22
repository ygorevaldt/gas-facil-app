import { colors } from "@/constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";

interface NavItemProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  target: string;
}

export function NavItem(props: NavItemProps) {
  return (
    <TouchableOpacity>
      <MaterialIcons
        color={colors.white}
        size={32}
        name={props.icon}
        onPress={() => router.push(props.target)}
      />
    </TouchableOpacity>
  );
}
