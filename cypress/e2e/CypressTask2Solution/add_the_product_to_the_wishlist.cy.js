/// <reference types="cypress" />


describe('add the product to the wishlist functionality', () => {
    it('validate that the user can add the product to the wishlist', () => {
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get(".product-image-photo").first().click()
        cy.get(".action.towishlist").click()

        cy.wait(6000)

        cy.get("#email").type("jabuzarqa@smail.ucas.edu.ps")

        cy.get("[title=Password]").type('136489$272977Oo')
        cy.get("#send2").click()
        cy.get(".message-success.success.message").should('be.visible')
        .and('contain.text', 'Radiant Tee has been added to your Wish List. Click ');
        cy.screenshot({ capture: 'fullPage' })

        
    });
});