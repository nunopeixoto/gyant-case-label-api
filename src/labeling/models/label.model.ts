import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ versionKey: false })
export class Label extends Document {
    @Prop()
    code: string;

    @Prop()
    description: string;
}

export const LabelSchema = SchemaFactory.createForClass(Label);