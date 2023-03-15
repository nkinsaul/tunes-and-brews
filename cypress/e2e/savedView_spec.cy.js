// beforeEach(() => {
//   cy.intercept("GET", "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=385&apikey=GsEb44ExGWUeR5lOEg7Tugd2PdKAnKWl", {fixture: "mock.json"})
//   cy.visit('http://localhost:3000/') 
// })

// it('User should be able to view their saved events', () => {
//   cy.get('[data-cy=saved-link]').click()
//   cy.get('[data-cy=saved-header]').should('be.visible')
// })

// it('User should be able to navigate back home from saved view', () => {
//   cy.get('[data-cy=saved-link]').click()
//   cy.get('[data-cy=home-link]').click()
//   cy.get('[data-cy=vvG1HZ94ivZAwx-img]').should('be.visible')
// })