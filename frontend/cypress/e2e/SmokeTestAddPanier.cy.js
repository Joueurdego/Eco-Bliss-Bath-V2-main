describe('Smoke Test - Bouton Panier', () => {
  const pages = ['/#/', '/#/products', '/#/cart', '/#/reviews'];
  const usernameInput = '[data-cy="login-input-username"]';
  const passwordInput = '[data-cy="login-input-password"]';
  const loginButton = '[data-cy="login-submit"]';
  const cartButton = '[data-cy="nav-link-cart"]';

  beforeEach(() => {
    cy.visit('#/login');
    cy.get(usernameInput).type('test2@test.fr');
    cy.get(passwordInput).type('testtest', { log: false });
    cy.get(loginButton).click();
  });

  pages.forEach((page) => {
    it(`Vérifie le bouton Panier sur ${page}`, () => {
      cy.visit(page);

      cy.get(cartButton)
        .should('be.visible')
        .and('have.prop', 'tagName', 'A')
        .and('have.attr', 'href', '#/cart')
        .and('contain.text', 'Mon panier');

      cy.get(cartButton).click();
      cy.url().should('include', '#/cart');
    });
  });
});
