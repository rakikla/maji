

 describe('this is my fifth test suite',function(){
    it('this is my fifth test case',function(){



        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //visible invisible

        cy.get('#displayed-text').should('be.visible')

        //vissible hide button

        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')

        //click  show button
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')



        //alert
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()


        //variable the alert text

        cy.on('window:alert',(str)=>{
             //mocha

             expect(str).to.equal('Hello , share this practice page and share your knowledge')
        }
        )

        cy.on('window confirm',(str1)=>{
            expect(str1).to.equal('Hello , Are you sure you want to confirm?')
        

        }
            
        )



    })

 })

