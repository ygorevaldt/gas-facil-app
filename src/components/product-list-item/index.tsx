import { Image, Text, View } from "react-native";
import { StarRating } from "../star-rating";
import { styles } from "./styles";

interface CatalogItemProps {
  productName: string;
  seller: string;
  price: string;
  evaluationNote: number;
}

export function ProductListItem(props: CatalogItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.starRating}>
        <StarRating rating={props.evaluationNote} />
      </View>
      <View style={styles.content}>
        <Image style={styles.image} source={require("@/assets/gas-icon.png")} />
        <View style={styles.contentInfo}>
          <Text style={styles.product}>{props.productName}</Text>
          <Text style={styles.seller}>{props.seller}</Text>
        </View>
      </View>
      <Text style={styles.price}>{props.price}</Text>
    </View>
  );
}
