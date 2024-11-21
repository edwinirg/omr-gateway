import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from './core/config';
import { validationSchema } from './core/config/schemas/config.schema';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema,
      envFilePath: '.env',
      load: [config],
    }),
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'public'),
    // }),
  ]
})
export class AppModule {}
