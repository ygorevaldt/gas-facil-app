import { useUser } from "@/hooks";
import { favoriteProduct } from "@/http/user/favorite-product";
import { ProductModel, Seller } from "@/models/product-model";
import { formatCurrency, formatOpeningHour, formatPhoneNumber } from "@/utils";
import { MaterialIcons } from "@expo/vector-icons";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { StarRating } from "../star-rating";

import { colors } from "@/constants/colors";
import { styles } from "./styles";

interface ProductProps {
  product: ProductModel;
  seller: Seller;
}

export function Product(props: ProductProps) {
  const { user, updateUser } = useUser();
  const isBookmark = user.bookmarks.find((item) => item === props.product.id) ? true : false;

  async function handleFavoriteProduct() {
    const response = await favoriteProduct(user, props.product.id);
    if (!response) {
      return Alert.alert("Erro", "Não foi possível incluir produto nos favoritos");
    }

    updateUser(response);
  }

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
          <MaterialIcons name={isBookmark ? "bookmark" : "bookmark-outline"} size={32} />
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
      <View style={styles.containerSeller}>
        <View style={styles.headerSeller}>
          <Text style={styles.headerTitleSeller}>Fornecedor</Text>
          <MaterialIcons name="person" size={24} color={colors.green['900']} />
        </View>
        <View style={styles.contentSeller}>
          <View style={styles.contentItemSeller}>
            <Text style={styles.labelSeller}>Nome:</Text>
            <Text>{props.seller.name}</Text>
          </View>
          <View style={styles.contentItemSeller}>
            <Text style={styles.labelSeller}>Telefone:</Text>
            <Text>{formatPhoneNumber(props.seller.phone)}</Text>
          </View>
          <View style={styles.contentItemSeller}>
            <Text style={styles.labelSeller}>Horário de atendimento:</Text>
            <Text>
              {`${formatOpeningHour(props.seller.opening_hours.start)} às ${formatOpeningHour(
                props.seller.opening_hours.end
              )}`}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
