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
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypegooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: getMongoConfig,
        }),
        AuthModule,
        HomePageModule,
        ProductModule,
        ReviewModule,
        UserModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
