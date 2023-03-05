const ticketMasterKey = process.env.REACT_APP_TICKETMASTERKEY

describe('Event view flows', () => {
  beforeEach(() => {
    cy.intercept("GET", `https://app.ticketmaster.com/discovery/v2/events/vvG1HZ94ivZAwx.json?classificationName=music&dmaId=385&apikey=${ticketMasterKey}`, {fixture: "singleEvent.json"})
    cy.visit('http://localhost:3000/events/vvG1HZ94ivZAwx')
  })


it('User should see details about an event', () => {
  // cy.get('[data-cy="vvG1HZ94ivZAwx-details"]').should('be.visible')
  cy.get('[data-cy=vvG1HZ94ivZAwx-details]').should('be.visible')
})


})