describe('Fluxo de compra', () => {

    beforeEach(() => {
        cy.viewport(1920, 1080); // Configuração de resolução
        cy.visit('https://www.saucedemo.com/'); // Ir para a página de login
        cy.get('[data-test="username"]').type('standard_user'); // Preencher dados de user
        cy.get('[data-test="password"]').type('secret_sauce'); // Preencher dados de password
        cy.get('[data-test="login-button"]').click(); // Efetuar login
    });
    it('Fluxo de compra - Sucesso  ', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click(); // Adicionar produto ao carrinho
        cy.get('[data-test="shopping-cart-badge"]').should('be.visible') // Validar quantidade de itens no carrinho
            .and('have.text', '1'); // Validar quantidade de itens no carrinho
        cy.get('[data-test="shopping-cart-link"]').click(); // Ir para a página de carrinho
        cy.get('[data-test="inventory-item-name"]').should('be.visible') // Validar nome do produto no carrinho
            .and('have.text', 'Sauce Labs Backpack'); // Validar nome do produto no carrinho
        cy.get('[data-test="inventory-item-price"]').should('have.text', '$29.99'); // Validar valor do produto no carrinho
        cy.get('[data-test="checkout"]').click(); // Ir para a página de checkout
        cy.get('[data-test="firstName"]').type('João'); // Preencher dados do checkout
        cy.get('[data-test="lastName"]').type('Silva'); // Preencher dados do checkout
        cy.get('[data-test="postalCode"]').type('12345'); // Preencher dados do checkout
        cy.get('[data-test="continue"]').click(); // Continuar com o checkout
        cy.get('[data-test="inventory-item-price"]').should('be.visible') // Validar valor do produto no carrinho
            .and('have.text', '$29.99'); // Validar valor do produto no carrinho
        cy.get('[data-test="tax-label"]').should('be.visible') // Validar valor do imposto no carrinho
            .and('have.text', 'Tax: $2.40'); // Validar valor do imposto no carrinho
        cy.get('[data-test="tax-label"]').click(); // Validar valor do imposto no carrinho
        cy.get('[data-test="finish"]').click(); // Finalizar compra
        cy.get('[data-test="complete-header"]').should('be.visible') // Validar mensagem de sucesso
            .and('have.text', 'Thank you for your order!'); // Validar mensagem de sucesso


    });
});