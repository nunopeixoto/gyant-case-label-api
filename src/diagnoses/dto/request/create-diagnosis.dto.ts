import {IsDateString, IsNotEmpty, IsString, IsMongoId} from 'class-validator';
export class CreateDiagnosisRequest {
    @IsString()
    @IsNotEmpty()
    @IsMongoId()
    ehrId: string;

    @IsString()
    @IsNotEmpty()
    @IsMongoId()
    doctorId: string;

    @IsString()
    @IsNotEmpty()
    @IsMongoId()
    labelId: string;

    @IsDateString()
    @IsNotEmpty()
    date: Date;
}
