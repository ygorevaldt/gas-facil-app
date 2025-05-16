import { Text, View } from "react-native";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>GÁS FÁCIL</Text>
    </View>
  );
}
