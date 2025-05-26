import { colors } from "@/constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";

interface NavItemProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  target: string;
  onSelect: () => void;
  selected: boolean;
}

export function NavItem(props: NavItemProps) {
  function handleNabigate() {
    props.onSelect();
    router.push(props.target);
  }

  return (
    <TouchableOpacity activeOpacity={0.7}>
      <MaterialIcons color={colors.white} size={32} name={props.icon} onPress={handleNabigate} />
      {/* {props.selected && <View style={styles.underline} />} */}
    </TouchableOpacity>
  );
}
