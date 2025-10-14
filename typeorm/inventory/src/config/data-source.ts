import { config } from "dotenv";
import { DataSource } from "typeorm";
import { User } from "../entities/user.entity";
config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: process.env.NODE_ENV !== "production",
  logging: true,
  entities: [User],
});
