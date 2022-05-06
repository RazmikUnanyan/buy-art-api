import { prop } from "@typegoose/typegoose";
import {Base, TimeStamps} from "@typegoose/typegoose/lib/defaultClasses";

export interface ProductModel extends Base{}
export class ProductModel extends TimeStamps {

    @prop()
    title: string;

    @prop()
    description: string

    @prop()
    price: number;

    @prop()
    oldPrice: number;

    @prop({default:0})
    like?: number;

    @prop({default:0})
    views?: number;

    @prop()
    imagePath: number;

    @prop({type: ()=> [String]})
    category: string[];

    @prop({type: ()=> [String]})
    tags: string[];
}
