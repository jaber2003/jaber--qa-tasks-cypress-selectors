/// <reference types="cypress" />
describe('new selectors', () => {
    it('select element by text ', () => {
        cy.visit("/")
        cy.contains("Sign In ")
        cy.contains("Notes")
        cy.contains("Privacy and Cookie Policy").click()
    });
    it('select element using first ', () => {
        cy.visit("/")
        cy.get("li").first()
    });
});