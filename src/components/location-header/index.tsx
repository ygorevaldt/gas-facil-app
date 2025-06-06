import { colors } from "@/constants/colors";
import { useUser } from "@/hooks";
import { formatCep } from "@/utils";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { styles } from "./styles";

export function LocationHeader() {
  const { address } = useUser();
  const titleParts = [address?.street, address?.number].filter(Boolean).join(", ");
  const subtitleParts = [address?.district, address?.city].filter(Boolean).join(", ");
  const formattedCep = address?.cep ? formatCep(address.cep) : "";

  return (
    <View style={styles.container}>
      <MaterialIcons name="location-pin" color={colors.blue[500]} size={32} />
      <View>
        <Text style={styles.title}>{titleParts}</Text>
        <Text style={styles.subtitle}>{`${subtitleParts} - ${formattedCep}`}</Text>
      </View>
    </View>
  );
}
