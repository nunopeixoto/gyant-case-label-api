import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import { CreateEhrRequest } from './dto/request/create-ehr-request.dto';
import { EhrResponse } from './dto/responses/ehr-response.dto';
import { EhrsService } from './ehrs.service';
import {JwtAuthGuard} from 'src/auth/guards/jwt-auth.guard';

@Controller('ehrs')
export class EhrsController {
    constructor (private readonly ehrsService: EhrsService) {}

    @Get()
    @UseGuards(JwtAuthGuard)
    async findNext(): Promise<EhrResponse> {
        return this.ehrsService.findNext();
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    async createEhr(
        @Body() CreateEhrRequest: CreateEhrRequest
    ): Promise<EhrResponse> {
        return this.ehrsService.createEhr(CreateEhrRequest);
    }
}
