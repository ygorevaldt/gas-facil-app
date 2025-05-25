import { NavigationBottomBar } from "@/components/navigation-bottom-bar";
import { colors } from "@/constants/colors";
import { menus } from "@/constants/menus";
import { CLIENT_NAME } from "@/constants/names";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";

export default function Menu() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Olá,</Text>
        <Text style={styles.headerTitle}>{CLIENT_NAME}</Text>
      </View>
      <FlatList
        data={menus}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <MaterialIcons
              style={styles.listItemIcon}
              name={item.icon}
              size={24}
              color={colors.blue[500]}
            />
            <Text style={styles.listItemText}>{item.name}</Text>
          </View>
        )}
      />
      <NavigationBottomBar />
    </View>
  );
}
