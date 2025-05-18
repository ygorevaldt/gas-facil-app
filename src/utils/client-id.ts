import AsyncStorage from "@react-native-async-storage/async-storage";
import { nanoid } from "nanoid/non-secure";

const CLIENT_ID_KEY = "client_id";

export async function getClientId(): Promise<string> {
  const existingId = await AsyncStorage.getItem(CLIENT_ID_KEY);

  if (existingId) {
    return existingId;
  }

  const newId = nanoid();
  await AsyncStorage.setItem(CLIENT_ID_KEY, newId);

  return newId;
}
