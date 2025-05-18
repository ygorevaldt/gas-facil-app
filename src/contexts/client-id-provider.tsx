import { getClientId } from "@/utils";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

const ClientIdContext = createContext<string | null>(null);

export const ClientIdProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [clientSessionId, setClientSessionId] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const id = await getClientId();
      setClientSessionId(id);
    })();
  }, []);

  if (!clientSessionId) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <ClientIdContext.Provider value={clientSessionId}>{children}</ClientIdContext.Provider>;
};

export function useClientSessionId() {
  const context = useContext(ClientIdContext);
  if (!context) throw new Error("useClientId must be used within ClientIdProvider");
  return context;
}
