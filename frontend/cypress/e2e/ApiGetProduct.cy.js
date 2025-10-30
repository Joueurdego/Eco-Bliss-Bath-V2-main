const apiUrl = Cypress.env("apiUrl");

it("L'API permet de récupérer une fiche produit spécifique", () => {
  const productId = 3;

  cy.request({
    method: "GET",
    url: `${apiUrl}/products/${productId}`,
  }).then((response) => {
    expect(response.status).to.eq(200);

    const produit = response.body;

    expect(produit).to.have.property("id", productId);
    expect(produit).to.have.property("name");
    expect(produit).to.have.property("availableStock");
    expect(produit).to.have.property("skin");
    expect(produit).to.have.property("aromas");
    expect(produit).to.have.property("ingredients");
    expect(produit).to.have.property("description").and.to.be.a("string");
    expect(produit).to.have.property("price").and.to.be.a("number");
    expect(produit).to.have.property("picture").and.to.be.a("string");
    expect(produit).to.have.property("varieties");

    cy.log(`
        ID: ${produit.id},
        Produit récupéré : ${produit.name}, 
        Stock : ${produit.availableStock},
        Peau : ${produit.skin},
        Aromas : ${produit.aromas},
        Ingredients : ${produit.ingredients},
        Description : ${produit.description},
        Prix : ${produit.price}
        `);
  });
});