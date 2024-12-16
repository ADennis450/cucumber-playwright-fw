import { BasePage } from "./BasePage";

export class Cart extends BasePage {
    public url;
    public checkout_button = "xpath=//a[text()='CHECKOUT']"
    
    constructor() {
        super();
        this.url = this.baseUrl + 'cart.html'
    }
} 