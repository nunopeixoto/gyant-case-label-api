import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ versionKey: false })
export class Ehr extends Document {
    @Prop()
    text: string;

    @Prop()
    labeled: boolean;
}

export const EhrSchema = SchemaFactory.createForClass(Ehr);