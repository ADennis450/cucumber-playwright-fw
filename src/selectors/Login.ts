import { BasePage } from "./BasePage";

export class Login extends BasePage {
    public url;
    public loginLogo = 'body > div.login_logo'
    
    constructor() {
        super();
        this.url = this.baseUrl
    }
}