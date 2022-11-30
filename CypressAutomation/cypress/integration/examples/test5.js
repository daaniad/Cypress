/// <reference types="cypress" />

describe('Web Tables', function()
{
    it('Web Tables', function () {
      cy.visit('https://the-internet.herokuapp.com/tables')
      
      cy.get('#table1 td:nth-child(1)').each(($el, index, $list) => {
      
        const text = $el.text()
        if(text.includes("Doe"))
         {
          cy.get('#table1 td:nth-child(1)').eq(index).next().then(function(Fname){
            const FirstName = Fname.text()
            expect(FirstName).to.equal("Jason")
          })
         }
      })
    })
    

  })
