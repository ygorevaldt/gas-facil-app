import { TextInput } from "react-native";
import { styles } from "./styles";

export function Filter() {
  return <TextInput style={styles.container} placeholder="Buscar produtos" />;
}
