import { DataSource } from 'typeorm';
import { Departamento } from '../departamento.entity';


export const payrollDataSource = new DataSource({
  type: 'postgres',
  host: '192.168.7.2',
  port: 5433 ,
  username: 'postgres',
  password: 'Qrr3gb7jK59DuEr5byBQR3q5',
  database: 'db_omr_payroll_development',
  entities: [Departamento],
  synchronize: false, 
});
