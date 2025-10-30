const apiUrl = Cypress.env("apiUrl");
let token;

before(() => {
    cy.request("POST", apiUrl + "/login", {
        username: "test2@test.fr",
        password: "testtest"
    }).then((response) => {
        expect(response.status).to.eq(200);
        token = response.body.token;

    })
});

it("POST une Review", () => {

    cy.request({
        method: "POST",
        url: apiUrl + "/reviews",
        headers: { Authorization: `Bearer ${token}` },
        body: {
            title: "Titre",
            comment: "commentaire",
            rating: 5
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        const review = response.body;
        expect(review).to.have.property("id").and.to.be.a("number");
        expect(review).to.have.property("title").and.to.be.a("string");
        expect(review).to.have.property("comment").and.to.be.a("string");
        expect(review).to.have.property("rating",).and.to.be.a("number");
        expect(review).to.have.property("author");
        expect(review.author).to.have.property("email").and.to.be.a("string");


        cy.log(`
        ID: ${review.id},
        Title : ${review.title}, 
        Comment : ${review.comment},
        Rating : ${review.rating},
        Author : ${JSON.stringify(review.author)},
        Email : ${review.email}
        `);
    })

})

