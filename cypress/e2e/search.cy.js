describe('Commands', () => {
  it('Verify commands page', () => {

    cy.visit('https://example.cypress.io')

    cy.contains('Commands')
      .should('be.visible')

  })
})