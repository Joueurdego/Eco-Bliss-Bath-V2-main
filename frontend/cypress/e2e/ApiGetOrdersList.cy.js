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

    cy.request({
      method: 'GET',
      url: apiUrl + "/products/3",
      headers: { Authorization: `Bearer ${token}` } 
    }).then((response) => {
      expect(response.status).to.eq(200);
      const produit = response.body;
      

      cy.request({
        method: 'PUT',
        url: apiUrl + '/orders/add',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: {
              product: produit.id ,
              quantity: 1
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });


    cy.request({
      method: 'GET',
      url: apiUrl + "/products/7",
      headers: { Authorization: `Bearer ${token}` } 
    }).then((response) => {
      expect(response.status).to.eq(200);
      const produit = response.body;
      

      cy.request({
        method: 'PUT',
        url: apiUrl + '/orders/add',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: {
              product: produit.id ,
              quantity: 2
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });


  });
});

it("L'API /orders renvoie une liste des produits dans le panier", () => {
  cy.request({
    method: "GET",
    url: apiUrl + "/orders",
    headers: {
      "Authorization": "Bearer " + token
    }
  }).then((response) => {
    expect(response.status).to.eq(200);
    const orderLines = response.body.orderLines;
    expect(orderLines).to.be.an("array");

    
  });
});