import { ProductModel } from "@/models/product-model";
import { formatCurrency } from "@/utils";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { StarRating } from "../star-rating";
import { styles } from "./styles";

interface ProductProps {
  product: ProductModel;
}

export function Product(props: ProductProps) {
  async function handleFavoriteProduct() {}

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Image style={styles.image} source={require("@/assets/gas-icon.png")} />
          <View>
            <Text style={styles.product}>{props.product.name}</Text>
            <Text style={styles.seller}>{props.product.seller.name}</Text>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.7} onPress={handleFavoriteProduct}>
          <MaterialIcons name={"bookmark-outline"} size={32} />
        </TouchableOpacity>
      </View>
      <Text style={styles.contentInfo}>
        Valor referente somente ao gás de cozinha, para comprar gás + botijão entre em contato com o
        fornecedor.
      </Text>
      <View style={styles.bottom}>
        <StarRating rating={props.product.note} />
        <Text style={styles.price}>{formatCurrency(props.product.price)}</Text>
      </View>
    </View>
  );
}
