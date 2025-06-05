import { useUser } from "@/hooks";
import { fetchProducts } from "@/http/product";
import { fetchFavoriteProducts } from "@/http/product/fetch-favorite-products";
import { ProductModel } from "@/models/product-model";
import { getFiltersNormalize } from "@/utils";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import "react-native-get-random-values";
import { ProductListItem } from "../product-list-item";
import { styles } from "./styles";

export interface ProductsListProps {
  bookmarks?: boolean;
  search: string;
}

export function ProductsList(props: ProductsListProps) {
  const { user } = useUser();
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    (async () => {
      const registeredProducts = props.bookmarks
        ? await fetchFavoriteProducts(user.id)
        : await fetchProducts();
      if (!registeredProducts) return;

      setProducts(registeredProducts);
    })();
  }, []);

  const filteredProducts = products.filter((product) => {
    const normalize = getFiltersNormalize();
    const search = normalize(props.search ?? "");

    return (
      normalize(product.name).includes(search) || normalize(product.seller.name).includes(search)
    );
  });

  return (
    <FlatList
      style={styles.container}
      data={filteredProducts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductListItem product={item} />}
      contentContainerStyle={styles.containerItems}
      showsVerticalScrollIndicator={false}
    />
  );
}
