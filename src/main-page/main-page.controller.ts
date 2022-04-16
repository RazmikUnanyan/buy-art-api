import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {MainPageModel} from "./main-page.model";

@Controller('main-page')
export class MainPageController {

    @Post('create')
    async create(@Body() dto: Omit<MainPageModel, '_id'>) {
    }

    @Get(':id')
    async get(@Param(':id') id: string) {
    }

    @Delete(':id')
    async delete(@Param(':id') id: string) {
    }

    @Patch(':id')
    async patch(@Param(':id') id: string, dto: MainPageModel) {
    }
}
