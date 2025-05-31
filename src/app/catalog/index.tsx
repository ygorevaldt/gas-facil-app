import { Filter } from "@/components/filter";
import { LocationNavLayout } from "@/components/location-nav-layout";
import { ProductsList } from "@/components/product-list";
import { useUser } from "@/hooks";
import "react-native-get-random-values";

export default function Caralog() {
  const { address } = useUser();
  return (
    <LocationNavLayout title="Catalogo">
      <Filter />
      <ProductsList />
    </LocationNavLayout>
  );
}
