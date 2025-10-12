import { DataSource } from "typeorm";
import { User } from "../entities /user.entity";

const dataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "root",
  password: "secret",
  database: "mydb",
  synchronize: true,
  logging: true,
  entities: [User],
  migrations: ["src/migration/*.ts"],
  subscribers: ["src/subscriber/*.ts"],
});

export default dataSource;
