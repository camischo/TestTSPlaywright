@buying_a_product
Feature: Buying a product in Sauce Demo Application

  @smoke @regression
  Scenario: Successful login with valid credentials
    Given I am login on page Sauce Demo with username "standard_user" and password "secret_sauce"
    When I add the product "Sauce Labs Backpack" to the cart
    And I click the cart button
    And I continue to checkout
    And I fill the checkout form with first name "Christian Camilo", last name "Schottlaender" and postal code "250030"
    And I click the finish button
    Then I should see the message "Thank you for your order!"
