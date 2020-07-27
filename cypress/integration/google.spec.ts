describe('This is the first example of cypress', () => {
  it('should have a title', () => {
    cy.visit('www.google.com')
    cy.title().should('eq', 'Google')
  });
});
