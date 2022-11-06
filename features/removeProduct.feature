Feature: Remove the product from the cart

Scenario: Removal of product from the cart

Given I am on the cart page
And I want to remove the desired product from the cart
When I click on the Remove from cart button
Then I should be able to remove the desired product according to my needs.