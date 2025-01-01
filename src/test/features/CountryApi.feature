@CountryAPI @API
Feature: CountryAPI

Scenario: Get Country Official name
Given I call the country name api with the value "Nigeria"
Then The official language returned should be "Federal Republic of Nigeria"