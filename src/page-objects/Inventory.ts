import { BasePage } from "./BasePage";

export class Inventory extends BasePage {
    public url: string;
    public cart_icon  = "#shopping_cart_container";
    public sauce_labs_backpack_add_to_cart_button = "xpath=//div[text()='Sauce Labs Backpack']/ancestor::div[@class='inventory_item']/descendant::button"
 
    constructor() {
        super();
        this.url = this.baseUrl + 'inventory.html';
    }
}