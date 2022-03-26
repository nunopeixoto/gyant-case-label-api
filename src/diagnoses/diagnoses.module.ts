import { Module } from '@nestjs/common';
import { DiagnosesService } from './diagnoses.service';
import { DiagnosesController } from './diagnoses.controller';
import { DiagnosesRepository } from './diagnoses.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Diagnosis, DiagnosisSchema } from './models/diagnosis.model';
import { LabelsRepository } from 'src/labels/labels.repository';
import { UsersRepository } from 'src/users/users.repository';
import { EhrsRepository } from 'src/labeling/ehrs.repository';
import { Label, LabelSchema } from '../labels/models/label.model';
import { User, UserSchema } from 'src/users/models/user';
import {Ehr, EhrSchema} from '../labeling/models/ehr.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Diagnosis.name, schema: DiagnosisSchema },
      { name: Label.name, schema: LabelSchema },
      { name: User.name, schema: UserSchema },
      { name: Ehr.name, schema: EhrSchema }
    ])
  ],
  controllers: [DiagnosesController],
  providers: [DiagnosesService, DiagnosesRepository, LabelsRepository, UsersRepository, EhrsRepository]
})
export class DiagnosesModule {}
