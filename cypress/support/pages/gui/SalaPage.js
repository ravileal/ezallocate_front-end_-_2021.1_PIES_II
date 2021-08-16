/// ///////////////
// Comandos GUI //
/// //////////////

Cypress.Commands.add('verificarPaginaSala', () => {
  cy.xpath('/html/body/div/div/div/header/div/div[1]')
    .should('contain', 'Sala');
});

Cypress.Commands.add('abrirOpcaoSolicitarReserva', () => {
  cy.xpath('/html/body/div/div/div/main/div/section/div[1]/div[2]/div/table/tbody/tr[6]/td[5]/button').click();
});

Cypress.Commands.add('preencherTodosCampos', (descricao) => {
  cy.xpath('/html/body/div/div/div[3]/div/div/div[2]/div/div/div[1]/div/div/div[1]/div/input').type(descricao);
  cy.xpath('/html/body/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div/div[1]/div[1]/div[1]').click();
  cy.xpath('html/body/div/div/div[4]/div/div[2]/div/div').click();
});

Cypress.Commands.add('preencherDescricao', (descricao) => {
  cy.xpath('/html/body/div/div/div[3]/div/div/div[2]/div/div/div[1]/div/div/div[1]/div/input').type(descricao);
});

Cypress.Commands.add('preencherResponsavel', () => {
  cy.xpath('/html/body/div/div/div[3]/div/div/div[2]/div/div/div[2]/div/div/div[1]/div[1]/div[1]').click();
  cy.xpath('html/body/div/div/div[4]/div/div[2]/div/div').click();
});

Cypress.Commands.add('realizarSolicitacao', () => {
  cy.xpath('/html/body/div/div/div[3]/div/div/div[3]/button[2]').click();
});

Cypress.Commands.add('cancelarCriacaoReserva', () => {
  cy.xpath('/html/body/div/div/div[3]/div/div/div[3]/button[1]').click();
});

Cypress.Commands.add('irParaMinhasSolicitacoes', () => {
  cy.xpath('/html/body/div/div/div[2]/nav/div[2]/div[2]/a[2]').click();
});
