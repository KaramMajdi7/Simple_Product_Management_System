import { IsNotEmpty, IsString, IsPositive, IsNumber } from 'class-validator'; 

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsPositive()
    price: number;
}
