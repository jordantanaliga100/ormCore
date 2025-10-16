import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Base } from "./base.entity";
import { User } from "./user.entity";

@Entity("user_profiles")
export class UserProfile extends Base {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  avatarUrl: string;

  // 🔹 One-to-One relation with User
  @OneToOne(() => User, (user) => user.profile, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "userId" }) // marks owning side
  user: User;
}
