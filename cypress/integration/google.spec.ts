describe('Given a SDET learning cypress', () => {

  describe('when open Google Page', () => {

    beforeEach(async () => {
      cy.visit('www.google.com')
    });

    it('should have a title',async () => {

      cy.title().should('eq', 'Google')
    });

  })
});
