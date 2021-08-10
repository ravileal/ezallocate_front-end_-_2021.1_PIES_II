const url = Cypress.config('baseUrl');

const faker = require('faker');

const userData = {
  randomName: faker.name.findName(),
  randomEmail: faker.internet.email(),
};

describe('Alterar dados do perfil', () => {
  beforeEach(() => {
    cy.irParaPaginaLogin(url);
    cy.verificarPaginaLogin();
    cy.preencherFormularioLogin('laninha73pereira@gmail.com', '11235813');
    cy.autenticarUsuario();
    cy.verificarPaginaDashboard();
  });

  it('Alterar nome do usuário', () => {
    cy.irParaUserProfile();
    cy.verificarPaginaUserProfile();

    const newName = userData.randomName;
    cy.preencherNome(newName);
    cy.alterarDadosPerfil();

    // cy.verificarAlerta();

    // cy.irParaDashboard();
    // cy.verificarPaginaDashboard();

    // cy.irParaUserProfile();
    // cy.verificarPaginaUserProfile();

    // cy.verificarNomeFoiAlterado(newName);
  });
});
