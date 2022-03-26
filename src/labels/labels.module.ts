import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LabelsController } from './labels.controller';
import { LabelsRepository } from './labels.repository';
import { LabelsService } from './labels.service';
import { Label, LabelSchema } from './models/label.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Label.name, schema: LabelSchema }])
  ],
  controllers: [LabelsController],
  providers: [LabelsService, LabelsRepository],
  exports: []
})

export class LabelsModule {}
