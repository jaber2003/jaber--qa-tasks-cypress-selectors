/// <reference types="cypress" />
describe('submit a review on the product page functionality    ', () => {
    it('Validate that the user can submit a review on the product page', () => {
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get(".product-image-photo").first().click()
        cy.get("#tab-label-reviews").click()
        cy.get('#Rating_4').check({ force: true });
        cy.get("#nickname_field").type("jojo")
        cy.get("#summary_field").type("wow")
        cy.get("#review_field").type("nice")
         cy.contains("span","Submit Review").click()
        cy.wait(3000)
        cy.get('.message-success.success.message')
         .should('be.visible')
         .and('contain.text', 'You submitted your review for moderation.');

        
    });
    
});