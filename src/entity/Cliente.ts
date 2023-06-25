import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Cliente{
    
    @PrimaryColumn()
    Cedula:number;

    @Column()
    Nombre:string

    @Column()
    Apellido1:String

    @Column()
    FechaNacimiento:Date

    @Column()
    Genero:String;

    @Column()
    Estado: boolean

}
