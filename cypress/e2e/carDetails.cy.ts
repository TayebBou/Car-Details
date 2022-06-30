describe('CarDetails Page', () => {
    before(() => {
      cy.visit('http://localhost:3001/')
    })
    it('there is car images fetched in the Page', () => {
      cy.get('[alt="car outside"]')
        .invoke('attr', 'src')
        .should('not.be.empty')
      cy.get('img[alt="car outside"]').should('exist')
    })
    it('user can navigate in other pages', () => {
      cy.url().then((url) => {
        const oldUrl = url
        cy.get('*[class^="Home_buttons__"] > :nth-child(3)').click()
        cy.url().should('not.equal', oldUrl)
      })
    })
  })
  
  export {}