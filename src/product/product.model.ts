import { prop } from "@typegoose/typegoose";
import {Base, TimeStamps} from "@typegoose/typegoose/lib/defaultClasses";

export interface ProductModel extends Base{}
export class ProductModel extends TimeStamps {
    @prop()
    image: string;

    @prop()
    title: string;

    @prop()
    description: string

    @prop()
    price: number;

    @prop()
    oldPrice: number;

    @prop({type: ()=> [String]})
    category: string[];

    @prop({type: ()=> [String]})
    tags: string[];
}
