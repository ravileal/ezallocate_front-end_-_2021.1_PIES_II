// https://docs.cypress.io/api/introduction/api.html

const url = Cypress.config('baseUrl');

describe('Visitar endereço EzAllocate', () => {
  it('Visitar o endereço do EzAllocate', () => {
    cy.visit(url);
    cy.contains('EzAllocate');
  });
});
