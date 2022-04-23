import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {HomePageModel} from "./home-page.model";

@Controller('home-page')
export class HomePageController {

    @Post('create')
    async create(@Body() dto: Omit<HomePageModel, '_id'>) {
    }

    @Get(':id')
    async get(@Param(':id') id: string) {
    }

    @Delete(':id')
    async delete(@Param(':id') id: string) {
    }

    @Patch(':id')
    async patch(@Param(':id') id: string, dto: HomePageModel) {
    }
}
