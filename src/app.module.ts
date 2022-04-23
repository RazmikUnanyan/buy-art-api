import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthModule} from './auth/auth.module';
import {HomePageModule} from './home-page/home-page.module';
import {ProductModule} from './product/product.module';
import {ReviewModule} from './review/review.module';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypegooseModule} from "nestjs-typegoose";
import {getMongoConfig} from "./configs/mongo.config";

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypegooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: getMongoConfig,
            inject: [ConfigService],
        }),
        AuthModule,
        HomePageModule,
        ProductModule,
        ReviewModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
