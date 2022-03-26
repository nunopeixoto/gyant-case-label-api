import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateEhrRequest } from './dto/request/create-ehr-request.dto';
import { EhrResponse } from './dto/responses/ehr-response.dto';
import { EhrsService } from './ehrs.service';

@Controller('ehrs')
export class EhrsController {
    constructor (private readonly ehrsService: EhrsService) {}
    @Get()
    async findNext(): Promise<EhrResponse> {
        return this.ehrsService.findNext();
    }

    @Post()
    async createEhr(
        @Body() CreateEhrRequest: CreateEhrRequest
    ): Promise<EhrResponse> {
        return this.ehrsService.createEhr(CreateEhrRequest);
    }
}
