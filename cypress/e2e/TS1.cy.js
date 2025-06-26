/// <reference types="cypress" />
describe('TS1 CYPRESS SELECTORS ', () => {
    it('Register page selectors', () => {
        cy.visit("/#/register")
        cy.contains("conduit")
        cy.contains("Home")
        cy.get("a.nav-link").eq(1)
        cy.get('.nav-link.active')
        cy.get(".text-xs-center.ng-binding")
        cy.contains("Have an account?")
        cy.get('input[placeholder="Username"]')
        cy.get('input[placeholder="Email"]')
        cy.get('input[plagitceholder="Password"]')
        // cy.get('.btn')
        cy.get(".btn.btn-lg.btn-primary.pull-xs-right.ng-binding")
        cy.get(".logo-font.ng-binding")
        cy.get(".attribution.ng-binding")
        

    });
});