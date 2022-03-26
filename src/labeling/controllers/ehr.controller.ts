import { Body, Controller, Get } from '@nestjs/common';
import { EhrResponse } from '../dto/responses/ehr-response.dto';
import { EhrsService } from '../services/ehrs.service';

@Controller('ehrs')
export class EhrsController {
    constructor (private readonly ehrsService: EhrsService) {}
    @Get()
    async findNext(): Promise<EhrResponse> {
        return this.ehrsService.findNext();
    }
}
