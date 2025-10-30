const apiUrl = Cypress.env("apiUrl");
let token;
let produit; 
let cart;

before(() => {

  cy.request("POST", apiUrl + "/login", {
    username: "test2@test.fr",
    password: "testtest"
  }).then((response) => {
    expect(response.status).to.eq(200);
    token = response.body.token;



  });
});

it("Ajoute un produit disponible au panier avec POST", () => {
   cy.request({
        method: 'POST',
        url: apiUrl + '/orders/add',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: {
              product: 5,
              quantity: 1
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
});


it("Ajoute un produit disponible au panier avec PUT", () => {
   cy.request({
        method: 'PUT',
        url: apiUrl + '/orders/add',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: {
              product: 5 ,
              quantity: 1
        },
        
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
});


it("Ajoute un produit non disponible au panier est impossible (avec PUT)", () => {
   cy.request({
        method: 'PUT',
        url: apiUrl + '/orders/add',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: {
              product: 3,
              quantity: 3
        },
        
      }).then((response) => {
        expect(response.status).to.not.eq(200);
      });
});
