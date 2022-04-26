import { prop } from "@typegoose/typegoose";
import {Base, TimeStamps} from "@typegoose/typegoose/lib/defaultClasses";

export interface UserModel extends Base{}
export class UserModel extends TimeStamps{
    @prop({unique: true})
    email: string;

    @prop()
    passwordHash: string;

    @prop()
    banned: boolean;

    @prop()
    banReason: string;

    @prop()
    firstName: string;

    @prop()
    lastName: string;
}
