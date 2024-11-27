import { Given, When, Then } from '@cucumber/cucumber';
import { CurrentPage } from '../../utils/CurrentPage';
import dotenv from 'dotenv';
import { PageObject } from '../../utils/PageObject';

Given('I do stuff', () => {
  console.log("doin stuff")
})

Given('I go to the {string} page', async (pageName: string) => {
  const pageObject = PageObject.getPageObject(pageName);
  await CurrentPage.page.goto(pageObject['url']);
})
