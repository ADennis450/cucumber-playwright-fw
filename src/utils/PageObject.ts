import path from "path";
import { Login } from "../page-objects/Login";
import { Inventory } from "../page-objects/Inventory";
import { CurrentPage } from "./CurrentPage";
import { Cart } from "../page-objects/Cart";
import { Checkout } from "../page-objects/Checkout";

export class PageObject {
    private static po: any;
    public static getPageObject(className: string): any {
        const pageObject = className.toLocaleLowerCase();
        switch(pageObject){
            case 'login': {
                this.po = new Login();
                break;
            }
            case 'inventory': {
                this.po = new Inventory();
                break;
            }
            case 'cart': {
                this.po = new Cart();
                break;
            }
            case 'checkout': {
                this.po = new Checkout();
                break;
            }
            default: {
                throw new Error(`No page object for ${pageObject}. Add page object to getPageObject switch statement`)
            }
        }
    }

    public static getElement(element: string) {
        const refinedElement = element.replace(/ /g, '_').toLowerCase();
        return this.po[refinedElement];
    }
}