import { BasePage } from "./BasePage";

export class Products extends BasePage {
    public url: string;
    public sauce_labs_backpack = "xpath=//div[text()='Sauce Labs Backpack']";
    public sauce_labs_add_to_cart_btn = "xpath=//div[text()='Sauce Labs Backpack']/ancestor::div[@class='inventory_item']/descendant::button"
 
    constructor() {
        super();
        this.url = this.baseUrl + 'inventory.html';
    }
}