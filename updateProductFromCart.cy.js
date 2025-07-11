/// <reference types="cypress"/>
describe('update product functionality', () => {
    beforeEach(()=>{
cy.visit("/")
        cy.get(".product-image-photo").first().click()
        cy.get("#option-label-size-143-item-166").click()
        cy.get("#option-label-color-93-item-56").click()
        cy.get("#qty").clear().type(2)
        cy.wait(3000)
        cy.get("#product-addtocart-button").click()
        cy.contains("You added Radiant Tee to your").should("be.visible")
        cy.contains("span","2").should("contain","2").should("be.visible")
        


    })
    it(' validate that the user can update products from the shopping cart  ', () => {
        cy.get(".counter-number").click()
       cy.get(".item-qty.cart-item-qty").clear().type(3)
       cy.contains("span","Update").click()
        
    });
    it.only('validate that the user can update products from the shopping cart', () => {
         cy.get(".counter-number").click()
         cy.contains('span',"View and Edit Cart").click()
        cy.get('.input-text.qty').clear().type(5)
        cy.get('.update > span').click()
       



    });
});