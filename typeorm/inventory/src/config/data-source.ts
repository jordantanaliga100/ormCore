import { MongoDataSource } from "../db/mongodb";
import { MysqlDataSource } from "../db/mysql";
import { PostgresDataSource } from "../db/postgres";

export const connectDataSource = async () => {
  try {
    await PostgresDataSource.initialize(); //🔥
    await MysqlDataSource.initialize(); //🔥
    await MongoDataSource.initialize(); //🔥
    console.log("✅ ALL Data Source has been initialized!");
  } catch (error: any) {
    console.error("❌ Error during Data Source initialization:", error);
  }
};
