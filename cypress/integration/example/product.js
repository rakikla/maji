   describe('My First Test Suite',function(){

    it('My First Test Case',function(){
    
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        //cy.title().should('eq','online shopping site in india: shop online for mobiles,books,watches ,scyes and more - Amazon.in')

          cy.get('.search-keyword').type('ca')
          cy.wait(2000)
          cy.wait(2000)
         // cy.get('cart-icon > img.')
          cy.get('.product').should('have.length',5)
          cy.get('.product:visible').should('have.length',4)
          //parent to child chaining
          cy.get('.products').as('productLocator')
          cy.get('@productLocator').find('.product').should('have.length',4)
          cy.get(':nth-child(3) > .product-action>button').click()
          cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click()
            cy.get('@productLocator').find('.product').each(($e1,index,$list)=>{
           const veg =$e1.find('h4.product-name').text()
           if(veg.includes('Cashews')){
            cy.wrap($e1).find('button').click()
           }
          })
          
            
            
          })

          
          
    })


    
