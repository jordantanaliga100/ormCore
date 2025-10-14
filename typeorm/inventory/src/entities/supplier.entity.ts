import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Product } from "./product.entity";

@Entity("suppliers")
export class Supplier {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  contactPerson: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // 🧩 Relationship (one supplier -> many products)
  @OneToMany(() => Product, (product) => product.supplier)
  products: Product[];
}
