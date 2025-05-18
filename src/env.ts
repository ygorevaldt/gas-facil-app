import Constants from "expo-constants";
import { z } from "zod";

const envSchema = z.object({
  API_URL: z.string(),
});

const validateEnv = envSchema.safeParse(Constants.expoConfig?.extra);

if (!validateEnv.success) {
  console.error("Invalid enviroment variables", validateEnv.error.format());
  throw new Error("Invalid enviroment variables");
}

export const env = validateEnv.data;
