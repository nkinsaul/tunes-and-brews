const ticketMasterKey = process.env.REACT_APP_TICKETMASTERKEY

describe('Event view flows', () => {
  beforeEach(() => {
    cy.intercept("GET", `https://app.ticketmaster.com/discovery/v2/events/vvG1HZ94ivZAwx.json?classificationName=music&dmaId=385&apikey=${ticketMasterKey}`, {fixture: "singleEvent.json"})
    cy.visit('http://localhost:3000/events/vvG1HZ94ivZAwx')
  })

it('User should see details about an event', () => {
  cy.get('[data-cy=vvG1HZ94ivZAwx-details]').should('be.visible')
  cy.get('[data-cy=name]').contains('Shania Twain: Queen Of Me Tour')
  cy.get('[data-cy=venue]').contains('Spokane Arena')
  cy.get('[data-cy=ticket]').should('be.visible')
  cy.get('[data-cy=date]').contains('Apr 28, 2023')
  cy.get('[data-cy=url]').should('be.visible')
  cy.get('[data-cy=save]').should('be.visible')
  cy.get('[data-cy=image]').should('be.visible')
})

it('User should see a list of breweries', () => {
  cy.get('[data-cy=breweries]').should('be.visible')
  cy.get('[data-cy=0-name]').should('be.visible')
  cy.get('[data-cy=0-street]').should('be.visible')
  cy.get('[data-cy=0-link]').should('be.visible')
})

it('User can save an event ', () => {
  cy.get('[data-cy=save]').click()
  cy.get('[data-cy=pop-saved]').should('be.visible')
})

it('User can see events they have saved ', () => {
  cy.get('[data-cy=save]').click()
  cy.get('[data-cy=pop-saved]').should('be.visible')
  cy.get('[data-cy=saved-link]').click()
  cy.get('[data-cy=vvG1HZ94ivZAwx]').should('be.visible')
})

it.only('User can remove events they have saved', () => {
  cy.get('[data-cy=save]').click()
  cy.get('[data-cy=pop-saved]').should('be.visible')
  cy.get('[data-cy=saved-link]').click()
  cy.get('[data-cy=vvG1HZ94ivZAwx]').should('be.visible')
  cy.get('[data-cy=vvG1HZ94ivZAwx-b]').click()
})

})