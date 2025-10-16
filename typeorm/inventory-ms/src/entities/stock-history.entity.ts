import { Column, Entity, ManyToOne } from "typeorm";
import { Base } from "./base.entity";
import { Product } from "./product.entity";

@Entity("stock_history")
export class StockHistory extends Base {
  @ManyToOne(() => Product, (product) => product.stockHistories)
  product: Product;

  @Column()
  change: number; // + for addition, - for removal

  @Column()
  reason: string;
}
