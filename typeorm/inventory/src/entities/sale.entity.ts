import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SaleItem } from "./sale-item.entity";
import { User } from "./user.entity";

@Entity("sales")
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  invoiceNumber: string;

  @Column()
  saleDate: Date;

  @Column("decimal", { precision: 10, scale: 2 })
  totalAmount: number;

  @ManyToOne(() => User, (user) => user.sales)
  user: User;

  @OneToMany(() => SaleItem, (saleItem) => saleItem.sale)
  saleItems: SaleItem[];

  @CreateDateColumn()
  createdAt: Date;
}
