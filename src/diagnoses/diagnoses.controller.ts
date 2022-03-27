import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { DiagnosesService } from './diagnoses.service';
import { CreateDiagnosisRequest } from './dto/request/create-diagnosis.dto';
import { DiagnosisResponse } from './dto/response/diagnosis-response.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('diagnoses')
export class DiagnosesController {
  constructor(private readonly diagnosesService: DiagnosesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Body() createDiagnosisRequest: CreateDiagnosisRequest
  ): Promise<DiagnosisResponse> {
    return this.diagnosesService.create(createDiagnosisRequest);
  }
}
