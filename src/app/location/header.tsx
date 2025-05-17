import { Text, View } from "react-native";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Onde iremos entregar?</Text>
      <Text style={styles.headerSubtitle}>
        Caso você não esteja vendo a localização correta, digite abaixo o endereço ou CEP
      </Text>
    </View>
  );
}
