import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/core/config/database/database.module';
import { OmrService } from './omr.service';
import { OmrController } from './omr.controller';


@Module({
  imports: [DatabaseModule],
  providers: [OmrService],
  controllers: [OmrController],
})
export class CrossModule {}
