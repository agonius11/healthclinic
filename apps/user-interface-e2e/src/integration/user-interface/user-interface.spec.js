describe('user-interface: UserInterface component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=userinterface--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to UserInterface!');
    });
});
