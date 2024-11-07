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

       cy.visit(Cypress.env('url')+'/angularpractice/')
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
//cypress.config('defaultCommandTimeout',8000)
cy.get(':nth-child(2) > .nav-link').click()

this.data.productName.forEach((element)=>{
   cy.selectProduct(element)
})



ProductPage.getCheckBoxBtn().click()
var sum=0
//product sum
cy.get('tr td:nth-child(4) strong').each(($e1,index,$list)=>{
    const amount=$e1.text()
    var res=amount.split(" ")
    res=res[1].trim()
    sum=Number(sum)+Number(res)





}).then(()=>{
    cy.log(sum)
})

//Expected total
cy.get('h3 strong').then((element)=>{
    const amount=element.text()
    var total=amount.split(" ")
    total=total[1].trim()

    expect(Number(total)).to.equal(sum)

})
cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
cy.get('.checkbox').click()
cy.get('#country').type('India')
cy.get('.suggestions > ul > li > a').click()
cy.get('#checkbox2').check({force: true})
cy.get('[type="submit"]').click()
//cy.get('.alert').should('have.text','Success!thank you!your order will be deliver)

cy.get('.alert').then ((text)=>{
    const actualText=text.text()
    expect(actualText.including('Success')).to.be.true
})


  })
  

})