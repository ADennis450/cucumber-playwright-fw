export class ApiUtil {
    private static apiResponse: Map<string, any>;
    public static async fetchData(url:string, method: 'GET'|'POST', body?: string,  headers?: any): Promise<string> {
        const response = await fetch(url,
           {
            method: method,
            body: body
           }
        )
        console.log()
        return JSON.stringify(await response.json())
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