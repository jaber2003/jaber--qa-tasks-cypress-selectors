/// <reference types="cypress"/>
describe('Add To cart functionality', () => {
    it('Validate that the user can add product to cart', () => {
        cy.visit("/")
        cy.get(".product-image-photo").first().click()
        cy.get("#option-label-size-143-item-166").click()
        cy.get("#option-label-color-93-item-56").click()
        cy.get("#qty").type(2)
        cy.wait(3000)
        cy.get("#product-addtocart-button").click()
        cy.contains("You added Radiant Tee to your").should("be.visible")
        cy.contains("span","12").should("contain","12").should("be.visible")
        





    });
});