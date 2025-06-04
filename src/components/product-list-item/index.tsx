import { useProduct } from "@/hooks";
import { ProductModel } from "@/models/product-model";
import { formatCurrency } from "@/utils";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { StarRating } from "../star-rating";
import { styles } from "./styles";

interface CatalogItemProps {
  product: ProductModel;
}

export function ProductListItem(props: CatalogItemProps) {
  const { setSelectedProduct } = useProduct();

  function handleOnPressProduct() {
    setSelectedProduct(props.product);
    router.push("/order");
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPressProduct} activeOpacity={0.7}>
      <View style={styles.starRating}>
        <StarRating rating={props.product.note} />
      </View>
      <View style={styles.content}>
        <Image style={styles.image} source={require("@/assets/gas-icon.png")} />
        <View style={styles.contentInfo}>
          <Text style={styles.product}>{props.product.name}</Text>
          <Text style={styles.seller}>{props.product.seller.name}</Text>
        </View>
      </View>
      <Text style={styles.price}>{formatCurrency(props.product.price)}</Text>
    </TouchableOpacity>
  );
}
