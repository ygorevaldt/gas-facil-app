import Constants from "expo-constants";
import { z } from "zod";

const envSchema = z.object({
  API_URL: z.string().default("https://gas-facil-api.onrender.com"),
  GOOGLE_MAPS_API_KEY: z.string(),
});

const validateEnv = envSchema.safeParse(Constants.expoConfig?.extra);

if (!validateEnv.success) {
  console.error("Invalid enviroment variables", validateEnv.error.format());
  throw new Error("Invalid enviroment variables");
}

console.log(validateEnv.data);

export const env = validateEnv.data;
