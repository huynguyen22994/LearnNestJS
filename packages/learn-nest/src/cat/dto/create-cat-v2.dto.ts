import { IsString, IsInt } from 'class-validator'

export class CreateCatDtoV2 {
    @IsString()
    name: string;

    @IsInt()
    age: number;

    @IsString()
    breed: string;
}