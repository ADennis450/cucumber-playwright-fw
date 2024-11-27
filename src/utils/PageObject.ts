import path from "path";
import { Login } from "../selectors/Login";

export class PageObject {
    public static po: any;
    public static getPageObject(className: string): any {
        switch(className.toLocaleLowerCase()){
            case 'login': {
                this.po = new Login();
                break
            }
            default: {
                break;
            }
        }
    }
    

}