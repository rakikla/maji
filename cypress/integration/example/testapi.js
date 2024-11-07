
/// <reference types="cypress" />

describe('apitest', function(){
    it('https method', function(){

cy.request('POST', 'https://reqres.in/api/users',{
     "name": "morpheus",
    "job": "leader"
}).then((response)=>{

    expect(response.status).to.eq(201)
    expect(response.body.name).to.eq('morpheus')
    expect(response.statusText).to.eq("Created")

})

cy.request('GET','https://reqres.in/api/users/2',{}).then((response)=>{
    expect(response.status).to.eq(200)
    //expect(response.body.statusText).to.eq('OK')

   expect(response.body.data.id).to.eq(2)

})
cy.request('PUT','https://reqres.in/api/users/2',{
    
        "name": "morpheus",
        "job": "zion resident"
    

}).then((response)=>{

    expect(response.status).to.eq(200)
    expect(response.body.name).to.eq('morpheus')


})
cy.request('DELETE','https://reqres.in/api/users/2',{}).then((response)=>{
    expect(response.status).to.eq(204)

})

cy.request('PATCH','https://reqres.in/api/users/2',{
    
    "name": "morpheus",
    "job": "zion resident"


}).then((response)=>{

expect(response.status).to.eq(201)
expect(response.body.name).to.eq('morpheus')
expect(response.statusText).to.eq("creted")

})

cy.request('GET','https://reqres.in/api/users?page=2',{}).then((response)=>{
    expect(respons.status).to.eq(200)
    expect(respons.body.statusText).to.eq('ok')  
    expect(response.body.data.id).to.eq(2)  

})
cy.request('PUT','https://reqres.in/api/users/2',{
      "name":"morpheus",
    "job":"zion resident"
    
    


}).then((respons)=>{
    expect(respons.body.status).to.eq(200)
    expect(respons.body.name).to.eq('morpheus')
})

cy.request('DELETE','https://reqres.in/api/users/2',{}).then((response)=>{
    expect(response.status).to.eq(204) 

})
cy.request('PATCH','https://reqres.in/api/users/2',{
    "name":"morpheus",
    "job":"zion resident"
    

}).then((response)=>{
    expect(response.status).to.eq(200)
    expect(response.body.name).to.eq('morpheus')
})





  })


    })
 

      

