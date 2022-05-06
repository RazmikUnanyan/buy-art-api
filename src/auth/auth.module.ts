import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {TypegooseModule} from "nestjs-typegoose";
import { UserModule } from 'src/user/user.module';
import {ConfigModule} from "@nestjs/config";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports:[
      TypegooseModule.forFeature([{
        typegooseClass: UserModule,
        schemaOptions: {
          collection: 'User'
        }
      }]),
      ConfigModule
  ]
})
export class AuthModule {}
