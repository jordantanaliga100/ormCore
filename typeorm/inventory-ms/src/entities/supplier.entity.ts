import { Column, Entity, OneToMany } from "typeorm";
import { Base } from "./base.entity";
import { Product } from "./product.entity";

@Entity("suppliers")
export class Supplier extends Base {
  @Column()
  name: string;

  @Column()
  contactPerson: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  // 🧩 Relationship (one supplier -> many products)
  @OneToMany(() => Product, (product) => product.supplier)
  products: Product[];
}
