import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["dev", "test", "production"]).default("dev"),
  API_URL: z.string(),
});

const validateEnv = envSchema.safeParse(process.env);

if (!validateEnv.success) {
  console.error("Invalid enviroment variables", validateEnv.error.format());
  throw new Error("Invalid enviroment variables");
}

export const env = validateEnv.data;
