import { IConfig } from './interfaces/config.interface';

export function config(): IConfig {
  return {
    port: Number(process.env.PORT),

    staffMicro: {
      host: process.env.STAFF_SERVICE_HOST,
      port: Number(process.env.STAFF_SERVICE_PORT)
    },
    
    payrollMicro: {
      host: process.env.PAYROLL_SERVICE_HOST,
      port: Number(process.env.PAYROLL_SERVICE_PORT)
    },
  };
}