import {IsNumber, IsString} from "class-validator";

export class CreateReviewDto {
    @IsString()
    name: string;

    @IsString()
    title: string;

    @IsString()
    description: string;

    //@Min(1,{message: "Не может быть менее одного"})
    @IsNumber()
    rating: number;

    @IsString()
    productId: string;
}