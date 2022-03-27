import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose"
import { Ehr } from "./models/ehr.model";

@Injectable()
export class EhrsRepository {
    constructor(
        @InjectModel(Ehr.name)
        private readonly ehr: Model<Ehr>
    ) {}

    async insertOne(data: Partial<Ehr>): Promise<Ehr> {
        const ehr = new this.ehr(data);
        return ehr.save();
    }

    async findNext() : Promise<Ehr> {
        return this.ehr.findOne({ labeled: false });
    }

    async findOne(_id: string) : Promise<Ehr> {
        return this.ehr.findOne({_id});
    }

    async markAsLabeled(_id: string) : Promise<Ehr> {
        return this.ehr.findOneAndUpdate(
            {_id}, 
            {labeled: true},
            {new: true}
        );
    }
}