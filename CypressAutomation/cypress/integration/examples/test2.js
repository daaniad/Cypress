describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('https://demo.nopcommerce.com')
      cy.get('#small-searchterms').type('Apple')
      cy.get('.search-box-button').click()
      cy.get('.product-box-add-to-cart-button').click()
      cy.get('#add-to-cart-button-4').click()
    
    })
  })
  



  //   cy.get('.container > p')
    //   cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)')