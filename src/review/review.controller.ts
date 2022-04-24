import {Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post} from '@nestjs/common';
import {CreateReviewDto} from "./dto/create-review.dto";
import {ReviewService} from "./review.service";
import {NOT_FOUND_ID} from "./rewiew.constant";

@Controller('review')
export class ReviewController {
    constructor(private readonly reviewService: ReviewService) {}

    @Post('create')
    async create(@Body() dto: CreateReviewDto) {
        return this.reviewService.create(dto);
    }

    @Delete(':id')
    async delete(@Param() id: string) {
        const deletedDoc = await this.reviewService.delete(id);
        if(!deletedDoc) {
            throw new HttpException(NOT_FOUND_ID, HttpStatus.NOT_FOUND);
        }
    }

    @Get('byProduct/:productId')
    async getByProduct(@Param('productId') productId: string) {
        return this.reviewService.findByProductId(productId);
    }

    @Delete(':productId')
    async deleteByProductId(@Param() productId: string) {
        const deletedDoc = await this.reviewService.deleteByProductId(productId);
        if(!deletedDoc) {
            throw new HttpException(NOT_FOUND_ID, HttpStatus.NOT_FOUND);
        }
    }
}
