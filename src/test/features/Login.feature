@Login
Feature: Login

Scenario: Sign into SwagLabs
 Given I go to the "Login" page
 When I enter "standard_user" into the "username_field"
 And I enter "secret_sauce" into the "password_field"
 And I click on the "login_button"
 Then I am on the "inventory" page