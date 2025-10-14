import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { Sale } from "./sale.entity";

@Entity("sale_items")
export class SaleItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Sale, (sale) => sale.saleItems)
  sale: Sale;

  @ManyToOne(() => Product, (product) => product.saleItems)
  product: Product;

  @Column()
  quantity: number;

  @Column("decimal", { precision: 10, scale: 2 })
  price: number;

  @Column("decimal", { precision: 10, scale: 2 })
  subtotal: number;
}
