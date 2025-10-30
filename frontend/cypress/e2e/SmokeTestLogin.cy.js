describe('Smoke Test - Bouton Connexion', () => {
    const pages = ['/#/', '/#/products', '/#/register','/#/reviews'];
    const loginSelector = '[data-cy="nav-link-login"]';
    

    pages.forEach((page) => {
        it(`Vérifie le bouton Connexion sur ${page}`, () => {
            cy.visit(page);

            cy.get(loginSelector)
                .should('be.visible')
                .and('have.prop', 'tagName', 'A')
                .and('have.attr', 'href', '#/login')
                .and('contain.text', 'Connexion');

            cy.get(loginSelector).click();
            cy.url().should('include', '#/login');
        });
    });
});
