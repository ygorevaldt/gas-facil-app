import { UserProvider } from "@/contexts/user-provider";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <UserProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {},
        }}
      />
    </UserProvider>
  );
}
