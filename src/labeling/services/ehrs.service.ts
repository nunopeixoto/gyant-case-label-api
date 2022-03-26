import {Injectable, NotFoundException, UnprocessableEntityException} from '@nestjs/common';
import { EhrsRepository } from '../repositories/ehrs.repository';
import { Ehr } from '../models/ehr.model';
import { EhrResponse } from '../dto/responses/ehr-response.dto';
import {CreateEhrRequest} from '../dto/request/create-ehr-request.dto';

@Injectable()
export class EhrsService {
    constructor(private readonly ehrsRepository: EhrsRepository) {}

    async createEhr(createEhrRequest: CreateEhrRequest) : Promise<EhrResponse> {
        const ehr = await this.ehrsRepository.insertOne(createEhrRequest);
        return this.buildResponse(ehr);
    }

    async findNext() : Promise<EhrResponse> {
        const ehr = await this.ehrsRepository.findNext();
        if (!ehr) {
            throw new NotFoundException('There are no Electronic Heal Record\'s to label.');
        }
        
        return this.buildResponse(ehr);
    }

    private buildResponse(ehr: Ehr): EhrResponse {
        return {
            _id: ehr._id.toHexString(),
            text: ehr.text,
            labeled: ehr.labeled
        }
    }
}
