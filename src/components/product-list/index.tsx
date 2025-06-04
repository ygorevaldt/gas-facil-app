import { fetchProducts } from "@/http/product";
import { fetchFavoriteProducts } from "@/http/product/fetch-favorite-products";
import { ProductModel } from "@/models/product-model";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import "react-native-get-random-values";
import { ProductListItem } from "../product-list-item";
import { styles } from "./styles";

export interface ProductsListProps {
  bookmarks?: boolean;
}

export function ProductsList(props: ProductsListProps) {
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    (async () => {
      const registeredProducts = props.bookmarks
        ? await fetchFavoriteProducts()
        : await fetchProducts();
      if (!registeredProducts) return;
      setProducts(registeredProducts);
    })();
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductListItem product={item} />}
      contentContainerStyle={styles.containerItems}
      showsVerticalScrollIndicator={false}
    />
  );
}
