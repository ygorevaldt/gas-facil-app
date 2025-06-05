import { colors } from "@/constants/colors";
import { Seller as SellerModel } from "@/models/product-model";
import { formatOpeningHour, formatPhoneNumber } from "@/utils";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { styles } from "./styles";

interface SellerProps {
  seller: SellerModel;
}

export function Seller(props: SellerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="person" size={24} color={colors.white} />
        <Text style={styles.headerTitle}>Fornecedor</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.contentItem}>
          <Text style={styles.label}>Nome:</Text>
          <Text>{props.seller.name}</Text>
        </View>
        <View style={styles.contentItem}>
          <Text style={styles.label}>Telefone:</Text>
          <Text>{formatPhoneNumber(props.seller.phone)}</Text>
        </View>
        <View style={styles.contentItem}>
          <Text style={styles.label}>Horário de atendimento:</Text>
          <Text>
            {`${formatOpeningHour(props.seller.opening_hours.start)} às ${formatOpeningHour(
              props.seller.opening_hours.end
            )}`}
          </Text>
        </View>
      </View>
    </View>
  );
}
