import { Given, Then } from "@cucumber/cucumber";
import { ApiUtil } from "../../utils/ApiUtil";
import { CurrentPage } from "../../utils/CurrentPage";
import { expect } from "@playwright/test";

Given(
  "I call the country name api with the value {string}",
  async (countryName: string) => {
    const response = await ApiUtil.fetchData(
      `https://restcountries.com/v3.1/name/${countryName}`,
      "GET"
    );
    ApiUtil.setApiResponse("countryName", response);
    CurrentPage.logger.log("info", `response is ${response}`);
  }
);

Then("The official language returned should be {string}", (officialCountryName: string) => {
    const countryApiResponse = JSON.parse(
      String(ApiUtil.getApiResponse("countryName"))
    );
    expect(countryApiResponse[0].name.official).toBe(officialCountryName);
  }
);

