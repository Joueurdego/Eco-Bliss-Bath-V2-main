describe('Visite des pages produits', () => {

    let Produits = [];


    before(() => {
        cy.visit('#/products');

        cy.get('[data-cy="product-link"]').each((button) => {
            const link = button.attr('ng-reflect-router-link');
            const id = link.split(',')[1].trim();
            Produits.push(id);
        });
    });

    it('Visite la page de chaque produit', () => {
        Produits.forEach((id) => {
            cy.visit(`#/products/${id}`);
            cy.get('[data-cy="detail-product-img"]')
                .should('be.visible')
                .and('have.prop', 'tagName', 'IMG')
            cy.get('.product-info').each(($el) => {
                cy.wrap($el).within(() => {
                    cy.get('h2').should('exist').and('be.visible');
                    cy.get('p').should('exist').and('be.visible');
                });
            });
            cy.get('[data-cy="detail-product-price"]')
                .should('be.visible')
                .and('have.prop', 'tagName', 'P')
                .and('contain.text', '€')
                .and('not.be.empty');

            cy.get('[data-cy="detail-product-stock"]')
                .should('be.visible')
                .and('have.prop', 'tagName', 'P')

            cy.get('[data-cy="detail-product-quantity"]')
                .should('be.visible')
                .and('have.prop', 'tagName', 'INPUT')

            cy.get('[data-cy="detail-product-add"]')
                .should('be.visible')
                .and('have.prop', 'tagName', 'BUTTON')

        });
    });

});
