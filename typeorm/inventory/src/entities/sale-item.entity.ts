import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Base } from "./base.entity";
import { Product } from "./product.entity";
import { Sale } from "./sale.entity";

@Entity("sale_items")
export class SaleItem extends Base {
  @Column()
  quantity: number;

  @Column("decimal", { precision: 10, scale: 2 })
  price: number;

  @Column("decimal", { precision: 10, scale: 2 })
  subtotal: number;

  @ManyToOne(() => Sale, (sale) => sale.saleItems, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "saleId" })
  sale: Sale;

  @ManyToOne(() => Product, (product) => product.saleItems, {
    onDelete: "RESTRICT",
  })
  @JoinColumn({ name: "productId" })
  product: Product;
}
