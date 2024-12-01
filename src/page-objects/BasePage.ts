export class BasePage {
    protected baseUrl;

    constructor() {
        this.baseUrl = process.env.BASEURL;
    }
}