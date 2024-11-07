describe('window Handling', function(){
    it('To Handle child tab',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('.table-display tr td:nth-child(3)').each(($e1,index,$list)=>{
     const pricetext=$e1.text();
     if(pricetext.includes('35')){
        cy.get('.table-display tr td:nth-child(3)').eq(index).prev().then((coursetext1)=>{
            const f =coursetext1.text()

            expect(f).to.equal('WebServices / REST API Testing with SoapUI')
        })

     }
})
    })
})