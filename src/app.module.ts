import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthModule} from './auth/auth.module';
import {MainPageModule} from './main-page/main-page.module';
import {ProductModule} from './product/product.module';
import {ReviewModule} from './review/review.module';
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot(),
        AuthModule,
        MainPageModule,
        ProductModule,
        ReviewModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
