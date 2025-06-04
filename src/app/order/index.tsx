import { LocationNavLayout } from "@/components/location-nav-layout";
import { Product } from "@/components/product";
import { Seller } from "@/components/seller";
import { useProduct } from "@/hooks";
import { View } from "react-native";
import { styles } from "./styles";

export default function Order() {
  const { selectedProduct } = useProduct();

  return (
    <LocationNavLayout title="Realizar novo pedido">
      <Product product={selectedProduct!} />
      <Seller seller={selectedProduct?.seller!} />
      <View style={styles.actions}></View>
    </LocationNavLayout>
  );
}
