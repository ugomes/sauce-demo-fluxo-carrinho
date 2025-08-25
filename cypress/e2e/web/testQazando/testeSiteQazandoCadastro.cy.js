describe('Teste Site Qazando', () => {
    beforeEach(() => {
        cy.visit('https://www.automationpratice.com.br');
        cy.get('li').contains('Cadastro').click()
    });

    it('Teste Campos em Branco', () => {
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName').should('be.visible').and('have.text', 'O campo nome deve ser prenchido');
    });

    it('Teste Campo email em branco', () => {
        cy.get('#user').type('Teste');
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName').should('be.visible').and('have.text', 'O campo e-mail deve ser prenchido corretamente');
    });

    it('Campo Senha em branco', () => {
        cy.get('#user').type('Teste');
        cy.get('#email').type('teste@teste.com.br');
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName').should('be.visible').and('have.text', 'O campo senha deve ter pelo menos 6 dígitos');
    });

    it('Cadastro com sucesso', () => {
        cy.get('#user').type('Teste');
        cy.get('#email').type('teste@teste.com.br');
        cy.get('#password').type('123456');
        cy.get('#btnRegister').click();
        cy.get('#swal2-title').should('be.visible').and('have.text', 'Cadastro realizado!');
        cy.get('.swal2-confirm').click();
    });
});
