import { Page } from "@playwright/test";
import { Logger } from "winston";

export const CurrentPage = {
    // @ts-ignore
    page: undefined as Page,
    // @ts-ignore
    logger: undefined as Logger,
    // @ts-ignore
}

export const CurrentPageObject = {
    pageObject: undefined as any
}