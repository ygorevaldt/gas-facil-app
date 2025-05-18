import { findAddress } from "@/http/address";
import { findUserBySessionId } from "@/http/user/find-user-by-session-id";
import { AddressModel, UserModel } from "@/models";
import { getClientId } from "@/utils";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

const UserContext = createContext<{ user: UserModel; address?: AddressModel } | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ user: UserModel; address?: AddressModel } | null>(null);

  useEffect(() => {
    (async () => {
      const sessionId = await getClientId();
      const [user, address] = await Promise.all([
        findUserBySessionId({ sessionId }),
        findAddress({ sessionId }),
      ]);

      if (!user) return;

      setUser({ user, address });
    })();
  }, []);

  if (!user) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useClientId must be used within ClientIdProvider");
  return context;
}
