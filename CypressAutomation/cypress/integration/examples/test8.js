describe('Test HOoks', function()
{

    before(function()
    {
        cy.fixture('example').then(function(data)
        {
            this.data = data
        })
    })

    it('Test Hooks', function () {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type(this.data.name)
        
        cy.get('#password').type(this.data.password)
    })
})
