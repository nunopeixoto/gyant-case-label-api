import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EhrsController } from './ehr.controller';
import { Ehr, EhrSchema } from './models/ehr.model';
import { EhrsRepository } from './ehrs.repository';
import { EhrsService } from './ehrs.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ehr.name, schema: EhrSchema }])
  ],
  controllers: [EhrsController],
  providers: [EhrsService, EhrsRepository],
  exports: []
})

export class EhrsModule {}
