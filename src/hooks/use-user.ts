import { UserContext } from "@/contexts";
import { useContext } from "react";

export function useUser() {
  const context = useContext(UserContext);

  if (!context) throw new Error("useClientId must be used within ClientIdProvider");
  return context;
}
