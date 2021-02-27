export class Category {
    id : string;
    name : string;
    code : string
}

export class Product {
    id : string;
    name : string;
    code : string;
    value : number;
    category : Category;
}