import { Button } from "@/components/button";
import { useUser } from "@/hooks";
import { router } from "expo-router";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export default function Index() {
  const { address } = useUser();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>GÁS FÁCIL</Text>
      </View>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={require("@/assets/logo-home.png")}
          resizeMode="contain"
        />
        <Button
          text="Faça seu pedido"
          onPress={address ? () => router.navigate("/catalog") : () => router.navigate("/location")}
        />
      </View>
    </View>
  );
}
