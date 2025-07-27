import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("Iam on the Magento homepage", () => {
  cy.visit("https://magento.softwaretestingboard.com/");
});


When("I navigate to the Watches page through the Gear menu", () => {
  cy.get('a[href*="gear"]').contains('Gear').click();
  cy.get('.categories-menu > .items > :nth-child(3) > a').click()
});

When("I switch the view to list mode", () => {
  cy.get('#mode-list').click();

});

Then("I add all watches with price greater than 55 to the cart", () => {
 cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
 cy.wait(3000)
cy.get(".action.primary.tocart").click()
 cy.wait(3000)
cy.visit("https://magento.softwaretestingboard.com/gear/watches.html");
cy.get(':nth-child(5) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
cy.wait(2000)
cy.get('#product-addtocart-button > span').click()
});