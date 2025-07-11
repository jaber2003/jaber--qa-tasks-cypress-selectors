/// <reference types="cypress" />

describe ('first scenrio',() =>{
it('test case', () => {
cy.visit("https://www.google.co.uk/")
})
it('test cse 2', () => {
    cy.visit("https://magento.softwaretestingboard.com/")
    
});
}


);
//login test cse
/**
 * vist login 
 * type usernome in usernome filed 
 * type pssword in pssword filed 
 * click in login button 
 */
describe('check login function', () => {
    it.only('verify the user login to moginto successfully ', () => {
        cy.visit("/customer/account/login/")
        cy.get("#email").type("jabuzarqa@smail.ucas.edu.ps")
        cy.get("#pass").type("136489$272977Oo")
        cy.get("#send2").click()
        
        
    });
    
});
