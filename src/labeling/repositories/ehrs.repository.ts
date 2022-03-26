import {Injectable, NotFoundException} from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose"
import { Ehr } from "../models/ehr.model";

@Injectable()
export class EhrsRepository {
    constructor(
        @InjectModel(Ehr.name)
        private readonly ehr: Model<Ehr>
    ) {}

    async findNext() : Promise<Ehr> {
        return this.ehr.findOne({ labeled: false });
    }
}