Feature: Add expensive watches to cart

  Scenario: Add all watches priced above $55 to the cart
    Given Iam on the Magento homepage
    When I navigate to the Watches page through the Gear menu
    And I switch the view to list mode
    Then I add all watches with price greater than 55 to the cart