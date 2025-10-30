const orders = `${Cypress.env("apiUrl")}/orders`;
context("GET /orders", () => {
    it(" Tente d'accéder au panier sans être connecter et renvoie une erreur 401", () => {
        cy.request({
            method: "GET",
            url: orders,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(401)
        })
    })
})
