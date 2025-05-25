import { Filter } from "@/components/filter";
import { LocationNavLayout } from "@/components/location-nav-layout";
import { ProductsList } from "@/components/product-list";
import "react-native-get-random-values";

export default function Caralog() {
  return (
    <LocationNavLayout>
      <Filter />
      <ProductsList />
    </LocationNavLayout>
  );
}
