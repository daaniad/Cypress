/// <reference types="cypress" />

describe('Web Controls', function()
{
    it('CheckBoxes', function () {
      cy.visit('https://the-internet.herokuapp.com/checkboxes')
      cy.get('#checkboxes > :nth-child(1)').check().should('be.checked')

      cy.wait(1000)
      cy.get('#checkboxes > :nth-child(3)').uncheck().should('not.be.checked')

      cy.get('#checkboxes > :nth-child(1)').uncheck().should('not.be.checked')
      cy.get('#checkboxes > :nth-child(3)').check().should('be.checked')
    })

    it('Static Dropdown', function () {
      cy.visit('https://the-internet.herokuapp.com/dropdown')
      cy.get('#dropdown').select('2').should('have.value','2')
      cy.get('#dropdown').select('1').should('have.value', '1')
    })

    it('Visible Element', function () {
      cy.visit('https://the-internet.herokuapp.com/dynamic_controls')
      cy.get('#checkbox').should('be.visible')
      cy.get('#checkbox-example > button').click()
      
    })


  })
