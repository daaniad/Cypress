/// <reference types="cypress" />

describe('TO-DO', function()
{
    it('List', function () {
      cy.visit('https://todomvc.com/examples/react')
      cy.get('header > input').type('Sacar al perro')
      cy.get('header > input').type('{enter}')
      cy.get('header > input').type('Regar las plantas')
      cy.get('header > input').type('{enter}')

    //   cy.get('ul > li:nth-child(2) > div > button').invoke('show')
    //   cy.get('ul > li:nth-child(2) > div > button').click()

      //cy.get('.toggle').click()



      //Bucle para apuntar a tareas, se pueden apuntar a varias a la vez

      cy.get('ul > li').invoke('show')

      //por cada elemento $el, recoge el index
      cy.get('ul > li').each(($el, index, $list) => {
      
        const nameVeg = $el.find('label').text() //encuentra el elemento
        if(nameVeg.includes("Sacar"))
        {
          //cy.get('button').invoke('show')
          cy.wrap($el).find('input.toggle').click()
        }
        })

      
    })
    

  })