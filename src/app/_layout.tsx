import { ClientIdProvider } from "@/contexts/client-id-provider";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <ClientIdProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {},
        }}
      />
    </ClientIdProvider>
  );
}
