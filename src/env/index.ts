import { z } from "zod";
import { config } from "dotenv";

const envScheam = z.object({
  NODE_ENV: z.enum(["dev", "test", "production"]).default("dev"),
  PORT: z.coerce.number().default(3337),
  DATABASE_URL: z.string().url(),
});

const _env = envScheam.safeParse(process.env);

if (!_env.success) {
  console.error("Invalid environment variables", _env.error.format());
  throw new Error("Invalid environment variables");
}

export const env = _env.data;
