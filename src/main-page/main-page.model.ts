import {ProductModel} from "../product/product.model";

export class MainPageModel {
    '_id': string;
    images: string[];
    title: string;
    description: string;
    lastProducts: ProductModel[];
    importantToUs: {
        title: string;
        description: string;
        icon: string;
    }[];
    contacts: {
        phoneNumber: string;
        email: string;
        socialMedia: {
            link: string;
            icon: string;
        }[];
    };
}
