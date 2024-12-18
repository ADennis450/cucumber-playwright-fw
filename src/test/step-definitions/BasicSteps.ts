import { Given, When, Then } from "@cucumber/cucumber";
import { CurrentPage, CurrentPageObject } from "../../utils/CurrentPage";
import { PageObject } from "../../utils/PageObject";
import { expect } from "@playwright/test";

Given("I go to the {string} page", async (pageName: string) => {
  PageObject.getPageObject(pageName);
  await CurrentPage.page.goto(PageObject.getElement('url'));
});

When(
  "I enter {string} into the {string}",
  async (arg: string, element: string) => {
    await CurrentPage.page.locator(PageObject.getElement(element)).fill(arg);
  }
);

When("I click on the {string}", async (element: string) => {
  await CurrentPage.page.locator(PageObject.getElement(element)).click();
});

Then("I am on the {string} page", async (pageName: string) => {
  PageObject.getPageObject(pageName);
  await CurrentPage.page.waitForURL(PageObject.getElement("url"))
  expect(CurrentPage.page.url()).toBe(PageObject.getElement("url"));
});

Then('the {string} equals {string}', async (element: string, expectedElementText: string) => {
  const elementText = await CurrentPage.page.locator(PageObject.getElement(element)).textContent()
  expect(elementText === expectedElementText)
})
