import path from "path";
import { Login } from "../page-objects/Login";
import { Products } from "../page-objects/Products";

export class PageObject {
    private static po: any;
    public static getPageObject(className: string): any {
        const pageObject = className.toLocaleLowerCase();
        switch(pageObject){
            case 'login': {
                this.po = new Login();
                break
            }
            case 'products': {
                this.po = new Products();
                break
            }
            default: {
                throw new Error(`No page object for ${pageObject}.`)
            }
        }
    }

    public static getElement(element: string) {
        const refinedElement = element.replace(' ', '_').toLowerCase();
        return this.po[refinedElement];
    }
}