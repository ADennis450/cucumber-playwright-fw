@Regression @Checkout
Feature: Checkout

Background: Sign Into SwagLabs
 Given I go to the "Login" page
 When I enter "standard_user" into the "username_field"
 And I enter "secret_sauce" into the "password_field"
 And I click on the "login_button"
 Then I am on the "inventory" page

Scenario: Buy A Saucelab Backpack
 Given I click on the "sauce labs backpack add to cart button"
 And I click on the "cart icon"
 And I am on the "cart" page
 And I click on the "checkout button"
 And I am on the "checkout" page
 And I enter "John" into the "first name field"
 And I enter "Doe" into the "last name field"
 And I enter "12345" into the "zip code field"
 When I click on the "continue button"
 Then the "summary total label" equals "Total: $32.39"
 