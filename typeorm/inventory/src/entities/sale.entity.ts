import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Base } from "./base.entity";
import { SaleItem } from "./sale-item.entity";
import { User } from "./user.entity";

@Entity("sales")
export class Sale extends Base {
  @Column({ unique: true, type: "uuid" })
  invoiceNumber: string;

  @Column()
  saleDate: Date;

  @Column("decimal", { precision: 10, scale: 2 })
  totalAmount: number;

  // RELATIONSHIPS 🔥
  @ManyToOne(() => User, (user) => user.sales, { eager: true })
  @JoinColumn({ name: "userId" })
  user: User;

  @OneToMany(() => SaleItem, (saleItem) => saleItem.sale, { eager: true })
  saleItems: SaleItem[];
}
