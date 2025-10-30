describe('Test API pour le Login', () => {
    const apiUrl = Cypress.env("apiUrl");
    let token;


    it('Utilisateur inconnu : retourne 401 en cas d’erreur', () => {
        cy.request({
            method: "POST",
            url: apiUrl + "/login",
            body: {
                username: "test3@test.fr",
                password: "testtest"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(401);
        });
    });

     it('Mauvais mot de passe : retourne 401 en cas d’erreur', () => {
        cy.request({
            method: "POST",
            url: apiUrl + "/login",
            body: {
                username: "test2@test.fr",
                password: "tesest"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(401);
        });
    });

    it('Utilisateur connu : retourne 200 et fournit un token', () => {
        cy.request({
            method: "POST",
            url: apiUrl + "/login",
            body: {
                username: "test2@test.fr",
                password: "testtest"
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            token = response.body.token;
        })
    });
});
