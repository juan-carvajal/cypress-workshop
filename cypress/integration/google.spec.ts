describe('Given a SDET learning cypress', () => {
  debugger;
  describe('when open Google Page', () => {

    beforeEach(() => {
      cy.visit('www.google.com');
    });

    it('should have a title', () => {

      cy.title().should('eq', 'Google');
    });

  });
});
