import {Controller, Get, UseGuards} from '@nestjs/common';
import { Label } from './models/label.model';
import { LabelsService } from './labels.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('labels')
export class LabelsController {
    constructor (private readonly labelsService: LabelsService) {}
    
    @Get()
    @UseGuards(JwtAuthGuard)
    async findAll(): Promise<Label[]> { 
        return this.labelsService.findAll();
    }
}
