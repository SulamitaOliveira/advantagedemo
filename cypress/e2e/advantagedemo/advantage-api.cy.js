/// <reference types="cypress"/>

describe('Advantage Api', () => {

  it('Exibir produtos de acordo com a busca', () => {
    const value = 'Tablet';

    cy.request({
      method: 'GET',
      url: `https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=${value}`,
    }).then((response) => {

      expect(response.status).to.eq(200);
      expect(response.body[0]).to.not.be.undefined;
      expect(response.body[0]).to.have.property('products');
      expect(response.body[0].products).to.be.an('array');
      response.body[0].products.forEach((product) => {
        expect(product.productName.toLowerCase()).to.include(value.toLowerCase());
      });
    });
  });
});

  