describe('Logout', () => {

    beforeEach(() => {
        cy.login()
    });    

    it('Deve realizar logout com sucesso', () => {
        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="logout-sidebar-link"]').click(); // Clicar no link de logout
        cy.url().should('eq', 'https://www.saucedemo.com/'); // Validar que a URL é a da página de login
        cy.get('[data-test="login-button"]').should('be.visible');
    });     // Validar que o botão de login seja visível});
    
});