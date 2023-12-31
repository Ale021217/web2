import { IsNotEmpty } from "class-validator";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";

@Entity()
export class Vendedor {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: "Falta el codigo del vendedor" })
  Codigo_Vendedor: number;

  @Column()
  @IsNotEmpty({ message: "Falta el nombre del vendedor" })
  Nombres_vendedor: string;

  @Column()
  @IsNotEmpty({ message: "Faltan los apellidos del vendedor" })
  Apellidos_vendedor: string;

  @Column()
  @IsNotEmpty({ message: "Falta la direccion del vendedor" })
  Direccion_vendedor: string;

  @Column()
  @IsNotEmpty({ message: "Falta el telefono del vendedor" })
  Telefono_vendedor: number;

  @Column()
  @IsNotEmpty({ message: "Falta el celular del vendedor" })
  Celular_vendedor: number;
  cliente: any;
}
