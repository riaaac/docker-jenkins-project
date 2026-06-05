describe('Login Page', () => {

  it('Verify login page loads', () => {

    cy.visit('https://example.cypress.io')

    cy.contains('Kitchen Sink')
      .should('be.visible')

  })

})