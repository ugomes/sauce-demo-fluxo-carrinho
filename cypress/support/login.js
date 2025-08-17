Cypress.Commands.add('login', () => {    
    const credenciais = Cypress.env('credenciais');
    const usuario = credenciais.usuario;
    const senha = credenciais.senha;

    cy.viewport(1920, 1080); // Configuração de resolução
    cy.visit('https://www.saucedemo.com/'); // Ir para a página de login
    cy.get('[data-test="username"]').type(usuario); // Preencher dados de user
    cy.get('[data-test="password"]').type(senha); // Preencher dados de password
    cy.get('[data-test="login-button"]').click(); // Efetuar login
});