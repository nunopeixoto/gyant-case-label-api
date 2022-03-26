import { Controller, Post, Body } from '@nestjs/common';
import { DiagnosesService } from './diagnoses.service';
import { CreateDiagnosisRequest } from './dto/request/create-diagnosis.dto';
import { DiagnosisResponse } from './dto/response/diagnosis-response.dto';

@Controller('diagnoses')
export class DiagnosesController {
  constructor(private readonly diagnosesService: DiagnosesService) {}

  @Post()
  create(
    @Body() createDiagnosisRequest: CreateDiagnosisRequest
  ): Promise<DiagnosisResponse> {
    return this.diagnosesService.create(createDiagnosisRequest);
  }
}
