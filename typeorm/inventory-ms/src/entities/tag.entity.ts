import { Column, Entity, ManyToMany } from "typeorm";
import { Base } from "./base.entity";
import { Product } from "./product.entity";

@Entity("tags")
export class Tag extends Base {
  @Column({
    unique: true,
  })
  name: string;

  @ManyToMany(() => Product, (product) => product.tags)
  products: Product[];
}
