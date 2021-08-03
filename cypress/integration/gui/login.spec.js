const url = Cypress.config('baseUrl');

describe('Realizar Login', () => {
  beforeEach(() => {
    cy.irParaPaginaLogin(url);
    cy.verificarPaginaLogin();
  });

  it('Realizar login com dados corretos', () => {
    cy.preencherFormularioLogin('laninha73pereira@gmail.com', '11235813');
    cy.autenticarUsuario();

    cy.verificarPaginaDashboard();
  });

  it('Tentativa de login com dados incorretos', () => {
    cy.preencherFormularioLogin('pedroanderson10a@gmail.com', '11235813');
    cy.autenticarUsuario();

    cy.verificarMensagemLoginInvalido();
  });

  it('Tentativa de login apenas com email', () => {
    cy.preencherFormularioLogin('pedroanderson10a@gmail.com', ' ');
    cy.autenticarUsuario();

    cy.verificarMensagemLoginInvalido();
  });

  it('Tentativa de login apenas com senha', () => {
    cy.preencherFormularioLogin(' ', '11235813');
    cy.autenticarUsuario();

    cy.verificarMensagemLoginInvalido();
  });

  it('Tentativa de login com campos vazios', () => {
    cy.preencherFormularioLogin(' ', ' ');
    cy.autenticarUsuario();

    cy.verificarMensagemLoginInvalido();
  });
});
