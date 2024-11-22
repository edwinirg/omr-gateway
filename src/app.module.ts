import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from './core/config';
import { validationSchema } from './core/config/schemas/config.schema';
import { CrossModule } from './modules/OMR-Example/omr.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema,
      envFilePath: '.env',
      load: [config],
    }),
    CrossModule
  ]
})
export class AppModule {}
