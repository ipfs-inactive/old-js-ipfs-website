describe('The service worker', () => {
  before(() => {
    if (window.navigator && navigator.serviceWorker) {
      navigator.serviceWorker.getRegistrations()
        .then((registrations) => {
          for (let registration of registrations) {
            registration.unregister()
          }
        })
    }
  })

  it('successfully activates', () => {
    cy.visit('/').then((contentWindow) => {
      // get all service worker registrations initially
      contentWindow.navigator.serviceWorker.getRegistrations()
        .then((registrations) => {
          expect(registrations.length).to.be.equal(0)
        })

      // Click on service worker button to activate it
      cy.get('#serviceWorkerButton').click().then(() => {
        // get all service worker registrations again
        contentWindow.navigator.serviceWorker.getRegistrations()
          .then((registrations) => {
            expect(registrations.length).to.be.equal(1)
          })
      })
    })
  })

  it('successfully deactivates', () => {
    // Click to deactivate service worker
    cy.get('#serviceWorkerButton').click().then(() => {
      // wait 5s until reload page
      cy.wait(5000).then(() => {
        // reload page
        cy.reload().then(() => {
          // check if there are registrations
          window.navigator.serviceWorker.getRegistrations()
            .then((registrations) => {
              expect(registrations.length).to.be.equal(0)
            })
        })
      })
    })
  })
})
