import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose"
import { Diagnosis } from "./models/diagnosis.model";

@Injectable()
export class DiagnosesRepository {
    constructor(
        @InjectModel(Diagnosis.name)
        private readonly diagnoses: Model<Diagnosis>
    ) {}

    async insertOne(data: Partial<Diagnosis>): Promise<Diagnosis> {
        const diagnoses = new this.diagnoses(data);
        return diagnoses.save();
    }

    async findOneByEhrId(ehrId: string) : Promise<Diagnosis> {
        return this.diagnoses.findOne({ ehrId });
    }
}