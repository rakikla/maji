class HomePage{
    getEditbox(){
        return cy.get('[name="name"]:nth-child(2)') 

    }
    getGender(){
        return cy.get('select')
    }
getPassword()
    {
        return cy.get('#exampleInputPassword1')
    } 
    getEmail(){
        return cy.get('[name=email]')
    }
    getCheck(){
        return cy.get('#exampleCheck1')
    }
    getTwentop(){
        return cy.get(':nth-child(4) > .ng-untouched')
    }
    getMinelenght(){
        return cy.get('[name="name"]:nth-child(2)')
    }
    getdisable(){
        return cy.get('#inlineRadio3')
    }
    getEmailass(){
        return cy.get(':nth-child(2) > .form-control')
    } 
    getCheckass(){
        return cy.get('#exampleCheck1')
    }

}

export default HomePage