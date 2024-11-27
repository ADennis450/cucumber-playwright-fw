import path from "path";
import { Login } from "../selectors/Login";

export class PageObject {
    public static getPageObject(className: string): any {
        switch(className.toLocaleLowerCase()){
            case 'login': {
                return new Login();
            }
            default: {
                return {}
            }
        }
    } 

}