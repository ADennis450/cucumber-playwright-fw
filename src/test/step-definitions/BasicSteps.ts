import { Given, When, Then } from '@cucumber/cucumber';
import { CurrentPage, CurrentPageObject } from '../../utils/CurrentPage';
import dotenv from 'dotenv';
import { PageObject } from '../../utils/PageObject';

Given('I do stuff', () => {
  console.log("doin stuff")
})

Given('I go to the {string} page', async (pageName: string) => {
  PageObject.getPageObject(pageName);
  await CurrentPage.page.goto(PageObject.po['url']);
})

When('I enter {string} into the {string}', async (arg: string, element: string) => {
  await CurrentPage.page.locator(PageObject.po[element]).fill(arg);
})
