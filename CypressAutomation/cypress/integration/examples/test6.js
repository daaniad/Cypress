/// <reference types="cypress" />

describe('Mouse Hover', function()
{
    it('Hover', function () {
      cy.visit('https://the-internet.herokuapp.com/hovers')
      cy.get(':nth-child(4) > :nth-child(2)').invoke('show')
      cy.get(':nth-child(4) > :nth-child(2) > a').click()
      cy.url().should('include','users/2')
      
    })
    

  })
