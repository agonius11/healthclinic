describe('user-interface: CustomButton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=custombutton--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to CustomButton!');
    });
});
