import {Injectable, Post, Body, UnprocessableEntityException} from '@nestjs/common';
import { CreateDiagnosisRequest } from './dto/request/create-diagnosis.dto';
import {DiagnosisResponse} from './dto/response/diagnosis-response.dto';
import {hash} from 'bcrypt';
import { DiagnosesRepository } from './diagnoses.repository';
import {UserResponse} from '../users/dto/response/user-response.dto';
import {User} from '../users/models/user';
import { Diagnosis } from './models/diagnosis.model';
import {CreateUserRequest} from '../users/dto/request/create-user-request.dto';
import { LabelsRepository } from 'src/labels/labels.repository';
import { UsersRepository } from 'src/users/users.repository';
import { EhrsRepository } from 'src/labeling/ehrs.repository';

@Injectable()
export class DiagnosesService {
  constructor (
    private readonly diagnosesRepository: DiagnosesRepository,
    private readonly labelsRepository: LabelsRepository,
    private readonly usersRepository: UsersRepository,
    private readonly ehrsRepository: EhrsRepository
  ) {}

  async create(createDiagnosisRequest: CreateDiagnosisRequest) : Promise<DiagnosisResponse> {
    await this.validateCreateDiagnosisRequest(createDiagnosisRequest);
      const diagnosis = await this.diagnosesRepository.insertOne(createDiagnosisRequest);

      return this.buildResponse(diagnosis);
  }

  private async validateCreateDiagnosisRequest(createDiagnosisRequest: CreateDiagnosisRequest): Promise<void> {
    const diagnosis = await this.diagnosesRepository.findOneByEhrId(createDiagnosisRequest.ehrId);
    if (diagnosis) {
      throw new UnprocessableEntityException('This case has already been labeled.')
    }
    
    const label = await this.labelsRepository.findOne(createDiagnosisRequest.labelId);
    if (!label) {
      throw new UnprocessableEntityException('The label does not exist.')
    }
    
    const ehr = await this.ehrsRepository.findOne(createDiagnosisRequest.ehrId);
    if (!ehr) {
      throw new UnprocessableEntityException('The eletronic health record does not exist.')
    }

    const doctor = await this.usersRepository.findOne(createDiagnosisRequest.doctorId);
    if (!doctor) {
      throw new UnprocessableEntityException('The doctor does not exist.')
    }
  }

  private buildResponse(diagnosis: Diagnosis): DiagnosisResponse {
    return {
      _id: diagnosis._id.toHexString(),
      doctorId: diagnosis.doctorId,
      labelId: diagnosis.labelId,
      ehrId: diagnosis.ehrId,
      date: diagnosis.date,
    }
}
}
