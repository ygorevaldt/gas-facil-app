import { colors } from "@/constants/colors";
import { useUser } from "@/hooks";
import { formatCep } from "@/utils";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { styles } from "./styles";

export function LocationHeader() {
  const { address } = useUser();
  return (
    <View style={styles.container}>
      <MaterialIcons name="location-pin" color={colors.blue[500]} size={32} />
      <View>
        <Text style={styles.title}>{`${address?.street}, ${address?.number}`}</Text>
        <Text style={styles.subtitle}>
          {`${address?.district}, ${address?.city} - ${formatCep(address?.cep!)}`}
        </Text>
      </View>
    </View>
  );
}
