const ticketMasterKey = process.env.REACT_APP_TICKETMASTERKEY

describe('Dashboard flows', () => {
  beforeEach(() => {

    cy.intercept("GET", "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=385&apikey=GsEb44ExGWUeR5lOEg7Tugd2PdKAnKWl", {fixture: "mock.json"})

    cy.visit('http://localhost:3000/') 
  })
    
  it('User should see the header when the page loads', () => {
    cy.get('[data-cy="app-name"]').contains('Brew Beats')
    cy.get('[data-cy="home-link"]').should('be.visible')
    cy.get('[data-cy="saved-link"]').should('be.visible')
  })

  it('User should see a list of events', () => {
    cy.get('[data-cy=vvG1HZ94ivZAwx]').should('be.visible')
    cy.get('[data-cy=vvG1HZ94xhtvGM]').should('be.visible')
    cy.get('[data-cy=vvG1HZ94ivZAwx-img]').should('be.visible')
    cy.get('[data-cy=vvG1HZ94xhtvGM-img]').should('be.visible')
    cy.get('[data-cy=vvG1HZ94ivZAwx-name]').contains('Shania Twain: Queen Of Me Tour')
    cy.get('[data-cy=vvG1HZ94ivZAwx-venue]').contains('Spokane Arena')
    cy.get('[data-cy=vvG1HZ94ivZAwx-date]').contains('Apr 27, 2023')
  })

  it('User should be able to search for an event', () => {
    cy.get('[data-cy=search]').type('Shania')
    cy.get('[data-cy=vvG1HZ94ivZAwx-img]').should('be.visible')
    cy.get('[data-cy=vvG1HZ94xhtvGM-img]').should('be.visible')
  })

  it('User should see more details about an event after clicking', () => {
    cy.get('[data-cy=vvG1HZ94ivZAwx]').click()
    cy.get('[data-cy=vvG1HZ94ivZAwx-details]').should('be.visible')
  })

})