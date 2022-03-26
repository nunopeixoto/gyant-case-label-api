import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateEhrRequest {
    @IsString()
    @IsNotEmpty()
    text: string;

    @IsBoolean()
    labeled: boolean;
}