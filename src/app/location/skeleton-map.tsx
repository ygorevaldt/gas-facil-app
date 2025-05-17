import { Text, View } from "react-native";
import { styles } from "./styles";

export function SkeletonMap() {
  return (
    <View style={styles.skeletonMap}>
      <Text style={styles.skeletonMapText}>Carregando mapa...</Text>
    </View>
  );
}
