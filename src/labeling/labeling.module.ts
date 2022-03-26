import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EhrsController } from './controllers/ehr.controller';
import { Ehr, EhrSchema } from './models/ehr.model';
import { EhrsRepository } from './repositories/ehrs.repository';
import { EhrsService } from './services/ehrs.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ehr.name, schema: EhrSchema }])
  ],
  controllers: [EhrsController],
  providers: [EhrsService, EhrsRepository],
  exports: []
})
export class LabelingModule {}
