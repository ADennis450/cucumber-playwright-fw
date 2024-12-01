import { chromium, firefox, webkit, LaunchOptions } from "@playwright/test";

const options: LaunchOptions =  {
    headless: true
}
const setLaunchOptions = () => {
    options.headless = (process.env.HEADLESS === 'true')
}

export const getBrowser = () => {
    setLaunchOptions()
    const browserType = process.env.BROWSER || "chrome";
    switch (browserType) {
        case "chrome":
            return chromium.launch(options);
        case "firefox":
            return firefox.launch(options);
        case "webkit":
            return webkit.launch(options);
        default:
            throw new Error("Please set the proper browser!") 
    }
}