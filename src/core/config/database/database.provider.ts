// import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { SEQUELIZE_PAYROLL, SEQUELIZE_STAFF } from './constants';

// export const databaseProviders = [
//   {
//     imports: [ConfigModule],
//     provide: SEQUELIZE_STAFF,
//     useFactory: async (configService: ConfigService): Promise<Sequelize> => {
//       const config = configService.get<SequelizeOptions[]>('db')[0]
//       const sequelize = new Sequelize(config);
//       sequelize.addModels([

//       ]);
//       await sequelize.authenticate();
//       (sequelize as any).dialect.supports.schemas = true;
//       return sequelize;
//     },
//     inject: [ConfigService]
//   },
//   {
//     imports: [ConfigModule],
//     provide: SEQUELIZE_PAYROLL,
//     useFactory: async (configService: ConfigService): Promise<Sequelize> => {
//       const config = configService.get<SequelizeOptions[]>('db')[1]
//       const sequelize = new Sequelize(config);
//       sequelize.addModels([

//       ]);
//       await sequelize.authenticate();
//       (sequelize as any).dialect.supports.schemas = true;
//       return sequelize;
//     },
//     inject: [ConfigService]
//   },

// ];
