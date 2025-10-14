import { Column, Entity, OneToMany, OneToOne } from "typeorm";
import { Base } from "./base.entity";
import { UserProfile } from "./profile.entity";
import { Sale } from "./sale.entity";

export enum UserRole {
  ADMIN = "admin",
  MANAGER = "manager",
  CASHIER = "cashier",
}

@Entity("users")
export class User extends Base {
  @Column({
    type: "varchar",
    length: 50,
  })
  username: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.CASHIER,
  })
  role: UserRole;

  @OneToMany(() => Sale, (sale) => sale.user)
  sales: Sale[];

  @OneToOne(() => UserProfile, (profile) => profile.user, {
    eager: true,
  })
  profile: UserProfile;
}
