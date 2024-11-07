describe('window Handliing2',function(){
    it('to child5',function(){
         cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
         cy.get('#opentab').then(($e1)=>{
            const url=$e1.prop('href')
            
            cy.visit(url)
            cy.origin('https://www.qaclickacademy.com/',()=>{
                cy.get('.sub-menu-bar [href*="about"]').click(
                    cy.get('.mt-50 h2').should('contain','QAClick Academy')
                )
            })

         })
    })
})