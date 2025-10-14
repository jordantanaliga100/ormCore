import { config } from "dotenv";
import { DataSource } from "typeorm";
import { Category } from "../entities/category.entity";
import { Product } from "../entities/product.entity";
import { UserProfile } from "../entities/profile.entity";
import { SaleItem } from "../entities/sale-item.entity";
import { Sale } from "../entities/sale.entity";
import { StockHistory } from "../entities/stock-history.entity";
import { Supplier } from "../entities/supplier.entity";
import { Tag } from "../entities/tag.entity";
import { User } from "../entities/user.entity";
config();

export const MongoDataSource = new DataSource({
  type: "mongodb",
  host: process.env.MONGO_HOST,
  username: process.env.MONGO_USER,
  password: process.env.MONGO_PASSWORD,
  port: Number(process.env.MONGO_PORT),
  database: process.env.MONGO_DB,
  synchronize: process.env.NODE_ENV !== "production",
  logging: true,
  entities: [
    User,
    Supplier,
    Product,
    Category,
    Sale,
    SaleItem,
    StockHistory,
    Tag,
    UserProfile,
  ],
});
