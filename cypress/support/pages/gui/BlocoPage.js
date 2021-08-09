/// ///////////////
// Comandos GUI //
/// //////////////

Cypress.Commands.add('verificarPaginaBloco', () => {
  cy.xpath('/html/body/div/div/div/header/div/div[1]')
    .should('contain', 'Bloco');
});

Cypress.Commands.add('irParaSala1', () => {
  cy.xpath('/html/body/div/div/div/main/div/section/div/div[1]/div/a').click();
});
