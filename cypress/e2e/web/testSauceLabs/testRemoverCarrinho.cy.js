describe('Remover item do carrinho', () => {
    beforeEach(() => {
        cy.login(); // Realiza o login antes de cada teste
    });
    it('Deve remover um item do carrinho com sucesso', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click(); // Adicionar produto ao carrinho
        cy.get('[data-test="shopping-cart-badge"]').should('be.visible') // Validar quantidade de itens no carrinho
            .and('have.text', '1'); // Validar quantidade de itens no carrinho
        cy.get('[data-test="shopping-cart-link"]').click(); // Ir para a página de carrinho
        cy.get('[data-test="inventory-item-name"]').should('be.visible') // Validar nome do produto no carrinho
            .and('have.text', 'Sauce Labs Backpack'); // Validar nome do produto no carrinho
        cy.get('[data-test="remove-sauce-labs-backpack"]').click(); // Remover produto do carrinho
        cy.get('[data-test="shopping-cart-badge"]').should('not.exist'); // Validar que o badge do carrinho não existe mais
    });
    
});