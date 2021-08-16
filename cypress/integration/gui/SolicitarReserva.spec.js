const url = Cypress.config('baseUrl');

describe('Solicitar Reserva', () => {
  beforeEach(() => {
    cy.irParaPaginaLogin(url);
    cy.verificarPaginaLogin();
    cy.preencherFormularioLogin('laninha73pereira@gmail.com', '11235813');
    cy.autenticarUsuario();
    cy.verificarPaginaDashboard();
  });

  it('Solicitar reserva preenchendo todos os dados', () => {
    cy.irParaBloco1();
    cy.verificarPaginaBloco();

    cy.irParaSala1();
    cy.verificarPaginaSala();

    cy.abrirOpcaoSolicitarReserva();
    cy.preencherTodosCampos('Essa é a descrição');

    cy.realizarSolicitacao();

    cy.irParaMinhasSolicitacoes();
    cy.verificarPaginaMinhasSolicitacoes();
  });

  it('Solicitar reserva preenchendo apenas a descrição', () => {
    cy.irParaBloco1();
    cy.verificarPaginaBloco();

    cy.irParaSala1();
    cy.verificarPaginaSala();

    cy.abrirOpcaoSolicitarReserva();
    cy.preencherDescricao('Essa é a descrição');

    cy.realizarSolicitacao();

    cy.irParaMinhasSolicitacoes();
    cy.verificarPaginaMinhasSolicitacoes();
  });

  it('Solicitar reserva preenchendo apenas o responsável', () => {
    cy.irParaBloco1();
    cy.verificarPaginaBloco();

    cy.irParaSala1();
    cy.verificarPaginaSala();

    cy.abrirOpcaoSolicitarReserva();
    cy.preencherResponsavel();

    // Deve dar erro, pois estará faltando campos obrigatórios (descrição)
    // cy.realizarSolicitacao();
  });

  it('Cancelar solicitação de reserva', () => {
    cy.irParaBloco1();
    cy.verificarPaginaBloco();

    cy.irParaSala1();
    cy.verificarPaginaSala();

    cy.abrirOpcaoSolicitarReserva();
    cy.preencherTodosCampos('Essa é a descrição');

    cy.cancelarCriacaoReserva();
  });
});
