Feature: Clearly see the image of the product

Scenario: Emlarging the product image

  Given I am on the Product page
  And I want to clearly see the image of the desired product
  When I click on the picture of the desired product
  Then the picture's size of the desired product should increase