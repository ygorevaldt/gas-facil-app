import { Filter } from "@/components/filter";
import { LocationNavLayout } from "@/components/location-nav-layout";
import { ProductsList } from "@/components/product-list";
import { ProductModel } from "@/models/product-model";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";

export default function Caralog() {
  const products: ProductModel[] = [
    { id: uuid(), name: "Gás de cozinha - 13kg", seller: "Davi - Gás TA", price: 110.0, note: 10 },
  ];

  return (
    <LocationNavLayout>
      <Filter />
      <ProductsList />
    </LocationNavLayout>
  );
}
