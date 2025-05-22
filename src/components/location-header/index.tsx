import { colors } from "@/constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { styles } from "./styles";

export function LocationHeader() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="location-pin" color={colors.blue[500]} size={32} />
      <View>
        <Text style={styles.title}>R, José Guimarães, 4360</Text>
        <Text style={styles.subtitle}>Centro, Terra de Areia - RS, 95535-000</Text>
      </View>
    </View>
  );
}
