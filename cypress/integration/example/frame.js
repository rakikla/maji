 import Homepage from'../pageObjects/HomePage'
 import ProductPage from'../pageObjects/productPage' 
 
 describe('Framework concepts',function(){

    before(function(){
        cy.fixture('example').then((data)=>{
            this.data=data
        })
        //root-level hook
        //runs once before all tests
    }) 

   it('To handle Hooks and fixtures',function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('[name="name"]:nth-child(2)').type('Jame')
        cy.get('select').select('Female')
 cy.get('#exampleInputPassword1').type('maji123')
 cy.get('[name=email]').type(this.data.email)
 
 cy.get('#exampleCheck1').check()
 
 
 

 //assertion
 cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
 cy.get('[name="name"]:nth-child(2)').should('have.attr','minlength','2')
 cy.get('#inlineRadio3').should('be.disabled')
 cy.get(':nth-child(2) > .form-control').should('have.value',this.data.email)
 cy.get('#exampleCheck1').should('be.checked')

 //cy.get(':nth-child(2) > .nav-link').click()
 this.date.productname.foreach((element)=>{
    cy.selectproduct(element)
 })

   })
   
 
})