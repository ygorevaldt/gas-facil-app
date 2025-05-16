import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Button() {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7}>
      <Text style={styles.buttonText}>Faça seu pedido</Text>
    </TouchableOpacity>
  );
}
