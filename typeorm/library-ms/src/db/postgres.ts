import { DataSource } from "typeorm";

export const PostgresDataSource = new DataSource({
  type: "postgres",
  host: process.env.POST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: process.env.NODE_ENV !== "production",
  logging: true,
  entities: ["src/entities/**/*.ts"],
});
