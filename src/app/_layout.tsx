import { ProductProvider } from "@/contexts/product-provider";
import { UserProvider } from "@/contexts/user-provider";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <UserProvider>
      <ProductProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {},
          }}
        />
      </ProductProvider>
    </UserProvider>
  );
}
