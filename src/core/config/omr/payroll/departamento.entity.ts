import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Departamento {
  @PrimaryGeneratedColumn('uuid')
  _id: string; 

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  presupuesto: string;

  @Column()
  estatus: string;
}
