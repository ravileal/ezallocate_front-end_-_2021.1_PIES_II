/// ///////////////
// Comandos GUI //
/// //////////////

Cypress.Commands.add('verificarPaginaMinhasSolicitacoes', () => {
  cy.xpath('/html/body/div/div/div/header/div/div[1]')
    .should('contain', 'Minhas Solicitações');
});
