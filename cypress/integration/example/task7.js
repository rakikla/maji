

describe('window handligs2', function(){

    it('To handle child tab',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('table.table-display tr td:nth-child(2)').each(($e1,index,$list)=>{
            const text=$e1.text();
            if(text.includes('selenium webdrive')){
               cy.get('table.table-display tr td:nth-child(2)').eq(index).next().then((price)=>{
                   const priceText=price.text()
       
                   expect(priceText).to.equal('30')
               })
    }
})
    })

})

