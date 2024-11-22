import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity({ database: "payroll-2" })
export class puesto_paje {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column()
  nombre: string;

  @Column('uuid')
  departamento_id: string;

  @Column()
  salario: string;

  @Column()
  nivel: string;

  @Column()
  salario_base: string;
}
