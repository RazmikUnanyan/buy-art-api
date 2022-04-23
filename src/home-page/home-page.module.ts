import { Module } from '@nestjs/common';
import { HomePageController } from './home-page.controller';
import {TypegooseModule} from "nestjs-typegoose";
import {HomePageModel} from "./home-page.model";

@Module({
  controllers: [HomePageController],
  imports:[
    TypegooseModule.forFeature([
      {
        typegooseClass: HomePageModel,
        schemaOptions: {
          collection: 'HomePage'
        }
      }
    ])
  ]
})
export class HomePageModule {}
