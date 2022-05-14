class HomePage {
  VisitPage() {
    cy.viewport(1440, 900)
    cy.visit("https://buger-eats.vercel.app/")
    cy.get('#page-home div h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    
  }
  clickButton(){
    cy.get('a[href="/deliver"]')
    .wait(600)
    .click();
    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas' )
    .should('be.visible')
  }


}

export default new HomePage();
