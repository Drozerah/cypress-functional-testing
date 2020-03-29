describe('The Home Page', function() {
  it('successfully loads', function() {
    cy.visit('/') // change URL to match your dev URL
    cy.url().should('eq', 'http://localhost:5500/')
  })
  it('have a title tag', () => {
    cy.title().should('include', 'Home')
  })
  it('have a CSS link tag \'./main.css\'', () => {
    cy.get('head').find('link').should('have.attr', 'href').should('include', './main.css')
  })
  it('have a JS script tag \'./app.js\'', () => {
    cy.get('body').find('script').should('have.attr', 'src').should('include', './app.js')
  })
})