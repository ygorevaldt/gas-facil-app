import { Filter } from "@/components/filter";
import { LocationNavLayout } from "@/components/location-nav-layout";
import { ProductsList } from "@/components/product-list";
import { useState } from "react";

export default function Caralog() {
  const [search, setSearch] = useState("");

  return (
    <LocationNavLayout title="Catalogo">
      <Filter search={search} onSearchChange={setSearch} />
      <ProductsList search={search} />
    </LocationNavLayout>
  );
}
