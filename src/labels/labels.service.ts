import {Injectable, NotFoundException, UnprocessableEntityException} from '@nestjs/common';
import { LabelsRepository } from './labels.repository';
import { Label } from './models/label.model';

@Injectable()
export class LabelsService {
    constructor(private readonly labelsRepository: LabelsRepository) {}

    async findAll() : Promise<Label[]> {
        return await this.labelsRepository.findAll();
    }
}
