import {ProductModel} from "../product/product.model";
import {Base, TimeStamps} from "@typegoose/typegoose/lib/defaultClasses";
import {prop} from "@typegoose/typegoose";

export class importantToUsData {
    title: string;
    description: string;
    icon: string;
}

export class contactsData {
    phoneNumber: string;
    email: string;
    socialMedia: {
        link: string;
        icon: string;
    }
}

export interface HomePageModel extends Base {}
export class HomePageModel extends TimeStamps{
    @prop({type: () => [String]})
    images: string[];

    @prop()
    title: string;

    @prop()
    description: string;

    @prop({type: () => [ProductModel]})
    lastProducts: ProductModel[];

    @prop({type: () => [importantToUsData]})
    importantToUs: importantToUsData[];

    @prop({type: () => contactsData})
    contacts: contactsData;
}
