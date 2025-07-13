/// <reference types="cypress" />
describe('add the product to compare functionality ', () => {

    it('validate that the user can add the product to compare', () => {
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get(".product-image-photo").first().click()
        cy.get(".action.tocompare").click()
        cy.wait(4000)
        cy.get('.message-success > div').should("be.visible")
        .and('contain.text','You added product Radiant Tee to the comparison list.');
    });
});