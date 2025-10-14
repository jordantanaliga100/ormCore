import { AppDataSource } from "../config/data-source";

export const connectPostgres = async () => {
  try {
    await AppDataSource.initialize();
    console.log("✅ Data Source has been initialized!");
  } catch (error: any) {
    console.error("❌ Error during Data Source initialization:", error);
  }
};
