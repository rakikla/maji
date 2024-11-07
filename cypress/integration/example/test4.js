//const { describe } = require("mocha");

describe('My fourth test suite',function(){
    it('My frist test case',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //handling single checkbox

        cy.get('#checkBoxOption1').check().should('be.checked')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        //handling mutiple checkbox
          cy.get('[type="checkbox"]').check(['option2','option3'])

          //handling static dropdown

          cy.get('select').select('option2').should('have.value','option2')


          //handling Dynamic Dropdown

          cy.get('#autocomplete').type('id')
          cy.get('.ui-menu-item div').each(($e1,index,$list)=>{
            if($e1.text()==='India'){
                cy.wrap($e1).click()
            }
          })
    })


})
