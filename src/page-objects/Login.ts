import { BasePage } from "./BasePage";

export class Login extends BasePage {
    public url;
    public loginLogo = 'body > div.login_logo'
    public username_field = '#user-name'
    public password_field = '#password'
    public login_button = '#login-button'
    
    constructor() {
        super();
        if (process.env.ENV === 'uat') {
            this.url = this.baseUrl + 'v1/';
        } else {
            this.url = this.baseUrl;
        }
    }
}