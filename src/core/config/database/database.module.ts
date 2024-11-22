import { Module } from '@nestjs/common';
import { staffDataSource } from '../omr/staff/data/staff.datasource';
import { payrollDataSource } from '../omr/payroll/data/payroll.datasource';
import { PuestoPAJEDataSource } from '../omr/puestos_paje/payroll.datasource';
import { Client } from 'pg'

async function createDatabaseIfNotExists() {
  const client = new Client({
    user: 'postgres',
    password: 'lLr7yvF7t8qEJTTBluiq3',
    host: '192.168.7.2',
    port: '5435',
    database: 'postgres',
  });

  try {
    await client.connect();
    await client.query(`CREATE DATABASE db_omr_paje_payroll_development`);
    console.info('Database created or already exists.');
  } catch (error) {
    console.error('Error creating database:', error);
  } finally {
    await client.end();
  }
}

@Module({
  providers: [
    {
      provide: 'STAFF_DATASOURCE',
      useFactory: async () => {
        if (!staffDataSource.isInitialized) {
          console.log('entra');
          
          await staffDataSource.initialize();
        }
        return staffDataSource;
      },
    },
    {
      provide: 'PAYROLL_DATASOURCE',
      useFactory: async () => {
        if (!payrollDataSource.isInitialized) {
          await payrollDataSource.initialize();
        }
        return payrollDataSource;
      },
    },
    {
      provide: 'PUESTO_PAJE_DATASOURCE',
      useFactory: async () => {
        // await createDatabaseIfNotExists()

        if (!PuestoPAJEDataSource.isInitialized) {
          await PuestoPAJEDataSource.initialize();
        }
        return PuestoPAJEDataSource;
      },
    },
  ],
  exports: ['STAFF_DATASOURCE', 'PAYROLL_DATASOURCE','PUESTO_PAJE_DATASOURCE'],
})
export class DatabaseModule {}
