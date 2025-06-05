import { MaterialIcons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";
import { styles } from "./styles";

interface FilterProps {
  search: string;
  onSearchChange: (text: string) => void;
}

export function Filter(props: FilterProps) {
  return (
    <View style={styles.container}>
      <MaterialIcons name="search" size={20} color="#888" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Buscar produtos"
        placeholderTextColor="#888"
        value={props.search}
        onChangeText={props.onSearchChange}
      />
    </View>
  );
}
