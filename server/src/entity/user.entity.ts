import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Length, IsEmail, IsNotEmpty } from "class-validator";

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: "uuid" })
  id: number;

  @Column()
  @IsEmail()
  @Length(2, 30, {
    message:
      "The name must be at least 2 characters long but not longer than 30 characters",
  })
  @IsNotEmpty({ message: "The name is required" })
  name: string;

  @Column()
  @IsEmail()
  @IsNotEmpty({ message: "The email is required" })
  email: string;

  @Column()
  @IsNotEmpty()
  password_hash: string;
}