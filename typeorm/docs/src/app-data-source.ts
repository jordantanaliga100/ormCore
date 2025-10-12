import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/user.entity";

export const MysqlDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "secret",
  database: "testDB",
  entities: [User],
  logging: ["query", "error"],
  synchronize: true,
  connectorPackage: "mysql2",
});

try {
  await MysqlDataSource.initialize();
  console.log("Data Source has been initialized!");
} catch (error) {
  console.error("Error during Data Source initialization", error);
}
