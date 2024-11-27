import { chromium, firefox, webkit, LaunchOptions } from "@playwright/test";

const options: LaunchOptions = {
    headless: false,
    
}
export const getBrowser = () => {
    const browserType = process.env.npm_config_BROWSER || "chrome";
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