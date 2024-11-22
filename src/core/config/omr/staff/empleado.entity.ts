import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Empleado {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column()
  nombre: string;

  @Column()
  apellido_paterno: string;

  @Column()
  apellido_materno: string;

  @Column()
  curp: string;

  @Column()
  telefono: string;

  @Column()
  correo: string;

  // Solo almacenamos el departamento_id como UUID
  @Column('uuid')
  departamento_id: string;
}
