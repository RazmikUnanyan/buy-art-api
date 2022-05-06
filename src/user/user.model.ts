import {Base} from "@typegoose/typegoose/lib/defaultClasses";
import {prop} from "@typegoose/typegoose";

export interface UserModel extends Base{}
export class UserModel extends TimeRanges {

    @prop({unique: true})
    email: string

    @prop()
    password: string

    @prop()
    name: string

    @prop()
    subscribersCount: number

    @prop()
    location: string

    @prop()
    avatarPath: string
}
