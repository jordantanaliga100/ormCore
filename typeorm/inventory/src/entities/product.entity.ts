import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Base } from "./base.entity";
import { Category } from "./category.entity";
import { SaleItem } from "./sale-item.entity";
import { StockHistory } from "./stock-history.entity";
import { Supplier } from "./supplier.entity";
import { Tag } from "./tag.entity";

@Entity("products")
export class Product extends Base {
  @Column()
  name: string;

  @Column({ unique: true })
  sku: string;

  @Column("decimal", { precision: 10, scale: 2 })
  price: number;

  @Column({ default: 0 })
  stock: number;

  @Column({ default: 5 })
  reorderLevel: number;

  // 🧩 Relation: many products belong to one supplier
  @ManyToOne(() => Supplier, (supplier) => supplier.products, {
    onDelete: "SET NULL",
  })
  @JoinColumn({ name: "supplierId" })
  supplier: Supplier;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: "categoryId" })
  category: Category;

  @OneToMany(() => StockHistory, (stockHistory) => stockHistory.product)
  stockHistories: StockHistory[];

  @OneToMany(() => SaleItem, (saleItem) => saleItem.product)
  saleItems: SaleItem[];

  @ManyToMany(() => Tag, (tag) => tag.products)
  @JoinTable({
    name: "product_tags",
    joinColumn: { name: "productId" },
    inverseJoinColumn: { name: "tagId" },
  })
  tags: Tag[];
}
