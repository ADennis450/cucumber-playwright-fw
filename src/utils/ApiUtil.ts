
import { APIResponse } from "@playwright/test";
import { CurrentPage } from "./CurrentPage";

export class ApiUtil {
    private static apiResponse: Map<string, any>;
    public static async fetchData(url:string, method: 'GET'|'POST', body?: string,  headers?: any): Promise<string> {
        let response: APIResponse;
        if (method == 'GET') {
            response = await CurrentPage.page.request.get(url)
        } else if( method == 'POST') {
            response = await CurrentPage.page.request.post(url,{data: body})
        } else {
            throw new Error('fetchData must be either a GET or POST Request')
        }
        return await response.text();
    };
    public static setApiResponse(key: string, value: string): void {
        if(this.apiResponse == null) {
            this.apiResponse = new Map<string,string>
        }
        this.apiResponse.set(key, value);
    }
    public static getApiResponse(key: string) {
       return this.apiResponse.get(key);
    }
}