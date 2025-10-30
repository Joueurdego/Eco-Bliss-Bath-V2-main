describe('Tests fonctionnels - Affichage des produits ', () => {




    it('Vérifie affichage des produits de la page produit', () => {
        cy.visit('#/products');
        cy.get('[data-cy="product"]').each((product) => {
            cy.wrap(product).within(() => {
                cy.get('[data-cy="product-picture"]')
                    .should('be.visible')
                    .and('have.prop', 'tagName', 'IMG')
                cy.get('[data-cy="product-name"]')
                    .should('be.visible')
                    .and('have.prop', 'tagName', 'H3')
                    .and('not.be.empty');
                cy.get('[data-cy="product-ingredients"]')
                    .should('be.visible')
                    .and('have.prop', 'tagName', 'P')
                    .and('not.be.empty');
                cy.get('[data-cy="product-price"]')
                    .should('be.visible')
                    .and('have.prop', 'tagName', 'P')
                    .and('contain.text', '€')
                    .and('not.be.empty');
                cy.get('[data-cy="product-link"]')
                    .should('be.visible')
                    .and('have.prop', 'tagName', 'BUTTON')
                    .and('contain.text', 'Consulter');
            });
        })

    })

     it('Vérifie affichage des produits de la page accueil', () => {
        cy.visit('#');
        cy.get('[data-cy="product-home"]').each((product) => {
            cy.wrap(product).within(() => {
                cy.get('[data-cy="product-home-img"]')
                    .should('be.visible')
                    .and('have.prop', 'tagName', 'IMG')
                cy.get('[data-cy="product-home-name"]')
                    .should('be.visible')
                    .and('have.prop', 'tagName', 'H3')
                    .and('not.be.empty');
                cy.get('[data-cy="product-home-ingredients"]')
                    .should('be.visible')
                    .and('have.prop', 'tagName', 'P')
                    .and('not.be.empty');
                cy.get('[data-cy="product-home-price"]')
                    .should('be.visible')
                    .and('have.prop', 'tagName', 'P')
                    .and('contain.text', '€')
                    .and('not.be.empty');
                cy.get('[data-cy="product-home-link"]')
                    .should('be.visible')
                    .and('have.prop', 'tagName', 'BUTTON')
                    .and('contain.text', 'Consulter');
            });
        })

    })

})