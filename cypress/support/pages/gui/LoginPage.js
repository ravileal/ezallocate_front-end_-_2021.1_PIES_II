/// ///////////////
// Comandos GUI //
/// //////////////

Cypress.Commands.add('irParaPaginaLogin', (url) => {
  cy.visit(url);
});

Cypress.Commands.add('verificarPaginaLogin', () => {
  cy.xpath('/html/body/div/div/div/div/section/div/div/div/div/div/div')
    .should('contain', 'EzAllocate');
});

Cypress.Commands.add('preencherFormularioLogin', (email, senha) => {
  cy.get('#login-email').type(email);
  cy.get('#login-password').type(senha);
});

Cypress.Commands.add('autenticarUsuario', () => {
  cy.get('#btn-login').click();
});

Cypress.Commands.add('verificarMensagemLoginInvalido', () => {
  cy.get('#login-error').should('contain', 'Usuario ou senha inválidos');
});

Cypress.Commands.add('testeOutraPagina', () => {
  cy.visit('https://10minutemail.net/?lang=pt-br');
});
