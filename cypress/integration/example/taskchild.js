describe('window handling',function(){

    it('to handle child tab',function(){


        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click()



        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.get('#navbarSupportedContent [href*="about"]').click()
        })
    })
})