/// ///////////////
// Comandos GUI //
/// //////////////

Cypress.Commands.add('verificarPaginaDashboard', () => {
  cy.xpath('/html/body/div/div/div/header/div/div[1]')
    .should('contain', 'Dashboard');
});

Cypress.Commands.add('irParaBloco1', () => {
  cy.get('#btn-bloco-1').click();
});
