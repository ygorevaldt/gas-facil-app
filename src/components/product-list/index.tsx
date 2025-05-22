import { ProductModel } from "@/models/product-model";
import { FlatList } from "react-native";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import { ProductListItem } from "../product-list-item";
import { styles } from "./styles";

export function ProductsList() {
  const products: ProductModel[] = [
    { id: uuid(), name: "Gás de cozinha - 13kg", seller: "Davi - Gás TA", price: 110.0, note: 10 },
    { id: uuid(), name: "Gás de cozinha - 13kg", seller: "Vendedor 02", price: 110.0, note: 8 },
    { id: uuid(), name: "Gás de cozinha - 13kg", seller: "Vendedor 03", price: 115.0, note: 6.5 },
    { id: uuid(), name: "Gás de cozinha - 13kg", seller: "Vendedor 04", price: 111.0, note: 3 },
    { id: uuid(), name: "Gás de cozinha - 13kg", seller: "Vendedor 05", price: 125.0, note: 9 },
  ];

  return (
    <FlatList
      style={styles.container}
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ProductListItem
          productName={item.name}
          seller={item.seller}
          price={item.price.toString()}
          evaluationNote={item.note}
        />
      )}
      contentContainerStyle={styles.containerItems}
      showsVerticalScrollIndicator={false}
    />
  );
}
