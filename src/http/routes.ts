import { register } from "./controllers/register.js";
import type { FastifyInstance } from "fastify";

export async function appRoutes(app: FastifyInstance) {
  app.post("/users", register);
}
