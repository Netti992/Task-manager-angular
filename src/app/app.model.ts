export class AppModel {
    
    constructor(
        public title?: string,
        public checked: boolean = false,
        public category?: Category,
        public text?: string) {
            Object.keys(Category);
        }

    }

export enum Category {
    BILLING = 'BILLING', 
    HOUSE = 'HOUSE', 
    SHOPPING = 'SHOPPING', 
    TRAVEL = 'TRAVEL'
}

export interface AppInterface {
    title?: string;
    checked?: boolean;
    category?: Category;
    text?: string;
}
