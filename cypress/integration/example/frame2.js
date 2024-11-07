
 import HomePage from "./pageobject/HomePage"
 import Productpage from "./pageobject/ProductPage"

describe('Framework concepts',function(){

   before(function(){
       cy.fixture('example').then((data)=>{
           this.data=data
       })
       //root-level hook
       //runs once before all tests
   }) 
  it('To handle Hooks and fixtures',function(){
    const homepage = new HomePage();
    const ProductPage = new Productpage();

       cy.visit('https://rahulshettyacademy.com/angularpractice/')
       homepage.getEditbox().type(this.data.name)
       homepage.getGender().select(this.data.gender)
//homepage.getPassword().type(this.date.password)
homepage.getEmail().type(this.data.email)
homepage.getCheck().check()
//assertion
homepage.getTwentop().should('have.value',this.data.name)
homepage.getMinelenght().should('have.attr','minlength','2')
homepage.getdisable().should('be.disabled')
homepage.getEmailass().should('have.value',this.data.email)
homepage.getCheckass().should('be.checked')

cy.get(':nth-child(2) > .nav-link').click()
this.data.productName.forEach((element)=>{
   cy.selectProduct(element)
})

  })
  

})