import { Filter } from "@/components/filter";
import { LocationNavLayout } from "@/components/location-nav-layout";
import { ProductsList } from "@/components/product-list";
import { useState } from "react";

export default function Bookmarks() {
  const [search, setSearch] = useState("");

  return (
    <LocationNavLayout title="Produtos salvos">
      <Filter search={search} onSearchChange={setSearch} />
      <ProductsList bookmarks={true} search={search} />
    </LocationNavLayout>
  );
}
