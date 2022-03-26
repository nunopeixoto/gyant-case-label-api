import {Injectable} from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose"
import { Label } from './models/label.model';

@Injectable()
export class LabelsRepository {
    constructor(
        @InjectModel(Label.name)
        private readonly label: Model<Label>
    ) {}

    async findAll() : Promise<Label[]> {
        return this.label.find({});
    }

    async findOne(_id: string) : Promise<Label> {
        return this.label.findOne({_id});
    }
}