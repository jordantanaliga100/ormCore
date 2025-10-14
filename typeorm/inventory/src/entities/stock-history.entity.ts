import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./product.entity";

@Entity("stock_history")
export class StockHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.stockHistories)
  product: Product;

  @Column()
  change: number; // + for addition, - for removal

  @Column()
  reason: string;

  @CreateDateColumn()
  createdAt: Date;
}
