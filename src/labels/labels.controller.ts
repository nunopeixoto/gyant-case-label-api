import {Controller, Get} from '@nestjs/common';
import { Label } from './models/label.model';
import { LabelsService } from './labels.service';

@Controller('labels')
export class LabelsController {
    constructor (private readonly labelsService: LabelsService) {}
    
    @Get()
    async findAll(): Promise<Label[]> { 
        return this.labelsService.findAll();
    }

}
