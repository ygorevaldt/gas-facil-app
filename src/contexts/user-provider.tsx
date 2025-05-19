import { findAddress } from "@/http/address";
import { findUserBySessionId } from "@/http/user/find-user-by-session-id";
import { AddressModel, UserModel } from "@/models";
import { getClientId } from "@/utils";
import React, { createContext, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

type UserContextParams = {
  user: UserModel;
  address?: AddressModel;
  updateUser: (newUser: Partial<UserModel>) => void;
  updateAddress: (newAddress: Partial<AddressModel>) => void;
};

export const UserContext = createContext<UserContextParams | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<{ user: UserModel; address?: AddressModel } | null>(
    null
  );

  useEffect(() => {
    (async () => {
      const sessionId = await getClientId();
      const [user, address] = await Promise.all([
        findUserBySessionId({ sessionId }),
        findAddress({ sessionId }),
      ]);

      if (!user) return;
      setUserData({ user, address });
    })();
  }, []);

  const updateUser = (newUser: Partial<UserModel>) => {
    setUserData((prev) => (prev ? { ...prev, user: { ...prev.user, ...newUser } } : prev));
  };

  const updateAddress = (newAddress: Partial<AddressModel>) => {
    setUserData((prev) =>
      prev ? { ...prev, address: { ...prev.address, ...newAddress } as AddressModel } : prev
    );
  };

  if (!userData) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <UserContext.Provider value={{ ...userData, updateUser, updateAddress }}>
      {children}
    </UserContext.Provider>
  );
};
