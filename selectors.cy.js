/// <reference types="cypress" />
describe('selectors', () => {
   it('logo visobility', () => {
       cy.visit("/")
    //    cy.get("p")
    //    cy.get(".logo")
    //    cy.get("*")
    //    cy.get(".authorization-link a").first()
    //    cy.get(".base")
    // cy.get("[data-ui-id = page-title-wrapper]")
    cy.get("[data-ui-id = page-title-wrapper]")

        
   });
});