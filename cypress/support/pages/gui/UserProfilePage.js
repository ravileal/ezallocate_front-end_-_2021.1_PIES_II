/// ///////////////
// Comandos GUI //
/// //////////////

Cypress.Commands.add('verificarPaginaUserProfile', () => {
  cy.xpath('/html/body/div/div/div/header/div/div[1]')
    .should('contain', 'User Profile');
});

Cypress.Commands.add('preencherNome', (newName) => {
  cy.xpath('/html/body/div/div/div/main/div/section/div/div/div/form/div/div/div[3]/div/div/div[1]/div/input').clear();
  cy.xpath('/html/body/div/div/div/main/div/section/div/div/div/form/div/div/div[3]/div/div/div[1]/div/input').type(newName);
});

Cypress.Commands.add('alterarDadosPerfil', () => {
  cy.xpath('/html/body/div/div/div/main/div/section/div/div/div/form/div/div/div[8]/button').click();
});

Cypress.Commands.add('irParaDashboard', () => {
  cy.xpath('/html/body/div/div/div/header/div/a[1]/span/i').click();
});

Cypress.Commands.add('verificarNomeFoiAlterado', (newName) => {
  cy.xpath('/html/body/div/div/div/main/div/section/div/div/div/form/div/div/div[3]/div/div/div[1]/div/input')
    .should('contain', newName);
});

Cypress.Commands.add('verificarAlerta', () => {
  cy.on('window:confirm', () => true);
});
