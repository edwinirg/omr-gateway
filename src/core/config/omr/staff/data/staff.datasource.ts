import { DataSource } from 'typeorm';
import { Empleado } from '../empleado.entity';

export const staffDataSource = new DataSource({
  type: 'postgres',
  host: '192.168.7.2' ,
  port: 5433 ,
  username: 'postgres' ,
  password: 'Qrr3gb7jK59DuEr5byBQR3q5',
  database: 'db_omr_staff_development',
  entities: [Empleado],
  synchronize: true, // XD
});
