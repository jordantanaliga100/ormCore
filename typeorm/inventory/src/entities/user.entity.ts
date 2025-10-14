import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UserProfile } from "./profile.entity";
import { Sale } from "./sale.entity";

export enum UserRole {
  ADMIN = "admin",
  MANAGER = "manager",
  CASHIER = "cashier",
}

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.CASHIER,
  })
  role: UserRole;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @OneToMany(() => Sale, (sale) => sale.user)
  sales: Sale[];

  @OneToOne(() => UserProfile, (profile) => profile.user)
  profile: UserProfile;
}
