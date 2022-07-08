describe('empty spec', () => {
  it('should check that 7 +9 =16', () => {
  //1.Arrange
  
    cy.visit("http://127.0.0.1:5501/index.html")
    //2.Act
    //write the code that controls user input
    //uses a css selector to find an element
    cy.get('[value="7"]').click();
    cy.get('[value="+"]').click();
    cy.get('[value="9"]').click();
    cy.get('#equals').click();
    //3. ASSERT
  
    //check if the result is what we expect
    // check that 7 +9 
    //check 16 is inside display

    cy.get('.display').should("contain", "16")
  })
  it('should check that 5 - 3 =2', () =>{
    cy.visit("http://127.0.0.1:5501/index.html")
    cy.get('[value="5"]').click();
    cy.get('[value="-"]').click();
    cy.get('[value="3"]').click();
    cy.get('#equals').click();

    cy.get('.display').should("contain", "2")


  })
  it ('should check that 6 / 3 =2', () =>{
    cy.visit("http://127.0.0.1:5501/index.html")
    cy.get('[value="6"]').click();
    cy.get('[value="/"]').click();
    cy.get('[value="3"]').click();
    cy.get('#equals').click();
    cy.get('.display').should("contain", "2");
  })
   it ('should check that 2 X 3 =6', () =>{
    cy.visit("http://127.0.0.1:5501/index.html")
    cy.get('[value="2"]').click();
    cy.get('[value="/"]').click();
    cy.get('[value="3"]').click();
    cy.get('#equals').click();
    cy.get('.display').should("contain", "6");
    
})
it('should check that the user cannot do 2+/2',()=>{
  cy.visit("http://127.0.0.1:5501/index.html")
  cy.get('[value="2"]').click();
  cy.get('[value="+"]').click();
  cy.get('[value="/"]').click();
  cy.get('[value="2"]').click();
  cy.get('#equals').click();
  cy.get('.display').should("contain", "NaN");
})
it('should not let the user add multiple decimal points such as 2..',() =>{
  cy.visit("http://127.0.0.1:5501/index.html")
  cy.get('[value="2"]').click();
  cy.get('[value="."]').click();
  cy.get('[value="."]').click();
  cy.get('.display').should("contain", "NaN");
})


})
 