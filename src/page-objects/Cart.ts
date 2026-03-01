import { BasePage } from "./BasePage";

export class Cart extends BasePage {
    public url;
    public checkout_button = '[data-test="checkout"]'
    
    constructor() {
        super();
        this.url = this.baseUrl + 'cart.html'
    }
} 