/// <reference types="cypress" />
describe('selectors', () => {
    it('exmple selectors ', () => {
        cy.visit("https://www.telerik.com/support/demos")
        cy.get(".u-s-mb0")
        // cy.contains(".NavAlt-anchor.u-b0","Reporting & Docs")
        cy.get("[aria-label=Reporting]")
        // cy.get("a.NavAlt-anchor").eq(3)


        // cy.get("h2").contains("Web")
        cy.get("#web")


        cy.get(".TK-Footer-Link").contains("Blogs")

        // cy.get(".TK-Footer-List--inner.TK-Footer-List-Horizontal.TK-Footer-List-Social")
        cy.get("[title=Facebook]")

        cy.get(".TK-Footer-Social-Link").eq(1)
                cy.get(".TK-Footer-Social-Link").eq(2)
                        cy.get(".TK-Footer-Social-Link").eq(3)
                                cy.get(".TK-Footer-Social-Link").eq(4)
                                //  cy.get(".TK-Footer-Social-Link").eq(5).click()
                                cy.get(".TK-Footer-Social-Link").eq(0)



        
       
    });
});