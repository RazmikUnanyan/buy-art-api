import {ProductModel} from "../product/product.model";
import {Base, TimeStamps} from "@typegoose/typegoose/lib/defaultClasses";
import {prop} from "@typegoose/typegoose";

export enum FirstCategoryEnum {
    HOME,
    PRODUCTS,
    CONTACTS
}


export interface HomePageModel extends Base {}
export class HomePageModel extends TimeStamps{

    @prop()
    firstCategory: FirstCategoryEnum;

    @prop()
    secondCategory: string;

    @prop()
    title: string;

    @prop()
    category: string;
}
