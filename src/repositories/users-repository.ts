import type { User } from "generated/prisma/client.js";
import { Prisma } from "../../generated/prisma/client.js";

export interface UsersRepository {
  findByEmail(email: string): Promise<User | null>;
  create(data: Prisma.UserCreateInput): Promise<User>;
}
