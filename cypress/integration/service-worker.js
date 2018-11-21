describe('Service worker', () => {
  it('activates and then deactivates successfully', () => {
    // Visit home page
    cy.visit('/')

    // Get window object
    cy.window().then((win) => {
      // Ensure that there are no service worker registrations initially
      return win.navigator.serviceWorker.getRegistrations()
        .then((registrations) => expect(registrations.length).to.be.equal(0))
    })

    // Wait 3s before clicking the button (to make sure everything is properly set up)
    cy.wait(3000)

    // Click service worker button to turn it on
    cy.get('#serviceWorkerButton').click()

    // Get window object again
    cy.window().then((win) => {
      // Ensure that there is one service worker registration after the click
      return win.navigator.serviceWorker.getRegistrations()
        .then((registrations) => expect(registrations.length).to.be.equal(1))
    })

    // Wait 3s one more time before clicking
    cy.wait(3000)

    // Click service worker button to turn it off
    cy.get('#serviceWorkerButton').click()

    // Get window object again
    cy.window().then((win) => {
      // Ensure that there are no service worker registrations
      return win.navigator.serviceWorker.getRegistrations()
        .then((registrations) => expect(registrations.length).to.be.equal(0))
    })
  })
})
