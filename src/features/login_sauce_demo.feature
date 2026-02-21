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

  @regression
  Scenario Outline: Successful login with diferent credentials
    Given I am login on page Sauce Demo with username "<username>" and password "<password>"
    Then I should be redirected to the inventory page

    Examples:
      | username                | password     |
      | standard_user           | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |
