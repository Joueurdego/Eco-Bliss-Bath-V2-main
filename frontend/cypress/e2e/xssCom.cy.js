describe('Vérifier si une faille XSS existe dans reviews', () => {
    

    beforeEach(() => {
        cy.session('testUser', () => {
            cy.visit('#/login');
            cy.get('[data-cy="login-input-username"]').type('test2@test.fr');
            cy.get('[data-cy="login-input-password"]').type('testtest', { log: false });
            cy.get('[data-cy="login-submit"]').click();
            cy.url().should('not.include', '#/login');
        });
    });

    it('Vérifier si une faille XSS existe dans l’espace commentaire.', () => {

        cy.visit('#/reviews');
        cy.get('[data-cy="review-input-rating-images"] img').eq(1).click();
        cy.get('[data-cy="review-input-comment"]').type('<script>alert("XSS");</script>')
        cy.get('[data-cy="review-input-title"]').type('Titre')
        cy.get('[data-cy="review-submit"]').click()
                cy.on('window:alert', () => {
            throw new Error("Une fenêtre d'alerte s'est affichée !");
        });
    });

    it('Vérifier si une faille XSS existe dans l’espace Titre.', () => {
        
        cy.visit('#/reviews');
        cy.get('[data-cy="review-input-rating-images"] img').eq(1).click();
        cy.get('[data-cy="review-input-comment"]').type('Commentaire')
        cy.get('[data-cy="review-input-title"]').type('<script>alert("XSS");</script>')
        cy.get('[data-cy="review-submit"]').click()
        cy.on('window:alert', () => {
            throw new Error("Une fenêtre d'alerte s'est affichée !");
        });
    });
});



