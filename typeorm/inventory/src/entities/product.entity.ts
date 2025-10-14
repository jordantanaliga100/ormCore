import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Category } from "./category.entity";
import { SaleItem } from "./sale-item.entity";
import { StockHistory } from "./stock-history.entity";
import { Supplier } from "./supplier.entity";
import { Tag } from "./tag.entity";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

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

  supplier: Supplier;
  category: Category;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // 🧩 Relation: many products belong to one supplier
  @ManyToOne(() => Supplier, (supplier) => supplier.products, {
    onDelete: "SET NULL",
  })
  @OneToMany(() => StockHistory, (stockHistory) => stockHistory.product)
  stockHistories: StockHistory[];

  @OneToMany(() => SaleItem, (saleItem) => saleItem.product)
  saleItems: SaleItem[];

  @ManyToMany(() => Tag, (tag) => tag.products)
  @JoinTable()
  tags: Tag[];
}
