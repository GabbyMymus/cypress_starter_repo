describe('test todo', () => {
  it('visit the url', () => {
    cy.visit('http://localhost:5173/')
  })

  it("able to add a todo", () =>{
    cy.visit('http://localhost:5173/')
    cy.get('input').type("New task")
    cy.get('button').contains('Add').click()
    // we have to first visit the page before we can get the input element
  })



})

