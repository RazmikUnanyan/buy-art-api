import {Injectable} from '@nestjs/common';
import {AuthDto} from "./dto/auth.dto";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {InjectModel} from "nestjs-typegoose";
import {UserModel} from "./user.model";
import {hash} from "bcryptjs";

@Injectable()
export class AuthService {

    constructor(@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>) {}

    async createUser(dto: AuthDto) {
        const newUser = new this.userModel({
            email: dto.email,
            passwordHash: await hash(dto.password, 10)
        })
        return newUser.save()
    }

    async findUser(email: string) {
        return this.userModel.findOne({email}).exec();
    }
}
