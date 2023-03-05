describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
    
  it('User should see the header when the page loads', () => {
    cy.get('[data-cy="app-name"]').contains('Brew Beats')
    cy.get('[data-cy="home-link"]').should('be.visible')
    cy.get('[data-cy="saved-link"]').should('be.visible')
  })
})