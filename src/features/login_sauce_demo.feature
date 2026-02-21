@login
Feature: Login to Sauce Demo Application

  @regression
  Scenario: Successful login with valid credentials
    Given I am on the Sauce Demo login page
    When I enter valid username and password
    And I click the login button
    Then I should be redirected to the inventory page

  @regression @negative
  Scenario: Unsuccessful login with blocked user credentials
    Given I am on the Sauce Demo login page
    When I enter invalid username and password
    And I click the login button
    Then I should see an error message indicating user blocked

