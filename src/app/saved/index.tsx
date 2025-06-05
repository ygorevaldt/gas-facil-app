import { Filter } from "@/components/filter";
import { LocationNavLayout } from "@/components/location-nav-layout";
import { ProductsList } from "@/components/product-list";

export default function saved() {
  return (
    <LocationNavLayout title="Produtos salvos">
      <Filter />
      <ProductsList bookmarks={true} />
    </LocationNavLayout>
  );
}
