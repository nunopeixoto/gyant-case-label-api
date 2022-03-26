import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ versionKey: false })
export class Diagnosis extends Document {
    @Prop()
    ehrId: string;

    @Prop()
    doctorId: string;

    @Prop()
    labelId: string;

    @Prop()
    date: Date;

}

export const DiagnosisSchema = SchemaFactory.createForClass(Diagnosis);