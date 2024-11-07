/// <reference types="cypress"/>

 describe('my calender tast',function(){

    it('my calender date',function(){

        const monthNumber='6';
        const date='15';
        const year='2027';

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
       
cy.get('.react-date-picker__inputGroup').click()
cy.get('.react-calendar__navigation__label').click()
cy.get('.react-calendar__navigation__label').click()

cy.contains('button',year).click();
cy.get('.react-calendar__year-view__months__month').eq(Number(monthNumber)-1).click()
cy.contains('abbr',date).click()

//Assertion

// cy.get('.react-date-picker__inputGroup input').each(($e1,index,$list)=>{
//     cy.wrap($e1).invoke('val').then((text)=>{
//         cy.log(text)
//         console.log(text)
    
//     })
// })

cy.get('.react-picker__inputGroup__input').each(($e1,index)=>{
    // cy.wrap($e1).invoke('val).then(text)=>{
     //console.log(text)   
    
   // })
   cy.wrap($e1).invoke('val').should('eq',expectedlist[index])
})
           
            
    })
})



