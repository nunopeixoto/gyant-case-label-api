import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EhrsController } from './controllers/ehr.controller';
import { Ehr, EhrSchema } from './models/ehr.model';
import { EhrsRepository } from './repositories/ehrs.repository';
import { EhrsService } from './services/ehrs.service';
import { Label, LabelSchema } from './models/label.model';
import { LabelsController } from './controllers/labels.controller';
import { LabelsService } from './services/labels.service';
import { LabelsRepository } from './repositories/labels.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ehr.name, schema: EhrSchema }, { name: Label.name, schema: LabelSchema }])
  ],
  controllers: [EhrsController, LabelsController],
  providers: [EhrsService, EhrsRepository, LabelsService, LabelsRepository],
  exports: []
})

export class LabelingModule {}
