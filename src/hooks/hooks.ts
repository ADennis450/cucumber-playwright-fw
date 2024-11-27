import { After, AfterAll, Before, BeforeAll, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext } from "@playwright/test";
import { getBrowser } from "../utils/Browser";
import { CurrentPage } from "../utils/CurrentPage";
import { getEnv } from "../env/env";
import { generateReport } from "../utils/Report";

let browser: Browser;
let context: BrowserContext;

BeforeAll(async () => {
    getEnv();
    browser = await getBrowser();
});

Before( async function ({ pickle }) {
    const scenarioName = pickle.name + pickle.id
    context = await browser.newContext({
        recordVideo: {
            dir: "test-results/videos",
        },
    });
    await context.tracing.start({
        name: scenarioName,
        title: pickle.name,
        sources: true,
        screenshots: true, snapshots: true
    });
    CurrentPage.page = await context.newPage();
});

After(async function ({ pickle, result }) {
    let videoPath: string;
    let img: Buffer;
    const path = `./test-results/trace/${pickle.id}.zip`;
    if (result?.status == Status.FAILED) {
        img = await CurrentPage.page.screenshot(
            { path: `./test-results/screenshots/${pickle.name}.png`, type: "png" })
    }
    await context.tracing.stop({ path: path });
    await CurrentPage.page.close();
    await context.close();
});

AfterAll(async function () {
    await browser.close();
})




