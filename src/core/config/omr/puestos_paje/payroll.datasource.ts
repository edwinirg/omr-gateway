import { DataSource } from 'typeorm';
import { puesto_paje } from './puesto.entity';

export const PuestoPAJEDataSource = new DataSource({
  type: 'postgres',
  host: '192.168.7.2',
  port: 5435 ,
  username: 'postgres',
  password: 'lLr7yvF7t8qEJTTBluiq3',
  database: 'db_omr_paje_payroll_development',
  entities: [ puesto_paje],
  synchronize: true, // XD
});
