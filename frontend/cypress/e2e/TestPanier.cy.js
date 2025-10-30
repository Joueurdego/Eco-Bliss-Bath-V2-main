describe('Test du Panier', () => {

    const usernameInput = '[data-cy="login-input-username"]';
    const passwordInput = '[data-cy="login-input-password"]';
    const loginButton = '[data-cy="login-submit"]';

    beforeEach(() => {


        cy.visit('#/login');
        cy.get(usernameInput).type('test2@test.fr');
        cy.get(passwordInput).type('testtest', { log: false });
        cy.get(loginButton).click();
        cy.url().should('not.include', '#/login');
        cy.intercept('GET', '/orders').as('getOrders');
        cy.visit('#/cart');
        cy.wait('@getOrders');
        cy.document().then((doc) => {
            const imgs = doc.querySelectorAll('img[data-cy="cart-line-delete"]');
            if (imgs.length) {
                imgs.forEach((img) => img.click());
            }
        });

    });


    it('ne devrait pas permettre d’ajouter un produit hors stock', () => {
        cy.intercept('/products/*').as('getrequest');
        cy.visit('#/products/3');
        cy.wait("@getrequest");
        cy.intercept('/orders').as('postrequest');
        cy.get('#add-to-cart').click();
        cy.wait("@postrequest");
        cy.get('[data-cy="cart-empty"]').should('be.visible')
    });

    it('Vérifie que le stock change aprés ajout du produit', () => {
        cy.intercept('/products/*').as('getrequest');
        cy.visit('#/products/4');
        cy.wait("@getrequest");
        cy.get('[data-cy="detail-product-stock"]').should('have.text', '1 en stock');
        cy.intercept('/orders').as('postrequest')
        cy.get('#add-to-cart').click();
        cy.wait("@postrequest");
        cy.go('back');
        cy.get('[data-cy="detail-product-stock"]').should('have.text', '0 en stock');
    })

    it('Entrer un chiffre negatif et cliquer sur panier', () => {
        cy.intercept('/products/*').as('getrequest');
        cy.visit('#/products/4');
        cy.wait("@getrequest");
        cy.get('[data-cy="detail-product-quantity"]').clear().type('-2');
        cy.intercept('/orders').as('postrequest');
        cy.get('#add-to-cart').click();
        cy.wait("@postrequest");
    })

    it('Entrer un chiffre superieur à 20', () => {
        cy.intercept('/products/*').as('getrequest');
        cy.visit('#/products/4');
        cy.wait("@getrequest");
        cy.get('[data-cy="detail-product-quantity"]').clear().type('25');
        cy.intercept('/orders').as('postrequest');
        cy.get('#add-to-cart').click();
        cy.wait("@postrequest");
    })
});




