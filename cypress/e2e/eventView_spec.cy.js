describe('Event view flows', () => {
  beforeEach(() => {
    cy.intercept()
    cy.visit('http://localhost:3000/events/vvG1HZ94ivZAwx')
  })
})