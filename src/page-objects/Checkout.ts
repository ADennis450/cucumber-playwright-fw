import { BasePage } from "./BasePage";

export class Checkout extends BasePage {
    public url: string;

    public first_name_field = '#first-name';
    public last_name_field = '#last-name';
    public zip_code_field = '#postal-code';
    public continue_button = '//input[@value="CONTINUE"]';
    public summary_total_label = '//div[@class="summary_total_label"]';
    
    constructor() {
        super();
        this.url = this.baseUrl + 'checkout-step-one.html';
    }
}