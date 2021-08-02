<template>
  <v-container id="regular-tables-solicitacoes" fluid tag="section">
    <!-- <base-v-component heading="Simple Tables" link="components/simple-tables" /> -->

    <!-- --------------- -->
    <!-- Prótotipo Lista Solicitações -->

    <base-material-card
      icon="mdi-calendar-clock"
      title="Solicitações Pendentes"
      class="px-5 py-3"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th class="primary--text">
              Horário
            </th>
            <th class="primary--text">
              Atividade
            </th>
            <th class="primary--text">
              Informações
            </th>
            <th class="primary--text">
              Aprovar
            </th>
            <th class="primary--text">
              Recusar
            </th>
          </tr>
        </thead>

        <ListaSolicitacoesTable :listSolicitacoes="listSolicitacoes"/>

      </v-simple-table>
    </base-material-card>

    <!-- --------------- -->
    <!-- Prótotipo Lista Solicitações -->

  </v-container>
</template>

<script>
import ListaSolicitacoesTable from '@/views/solicitacoes/components/table/ListaSolicitacoesTable';

export default {
  data() {
    return {
      listSolicitacoes: [
        {
          id: '',
          horario: '08:00 - 10:00',
          atividade: 'Estudos sobre Lógica',
          responsavel: 'Aluno X',
          diaSemana: 'Segunda',
        },
        {
          id: '',
          horario: '13:30 - 15:30',
          atividade: 'Célula Japônes',
          responsavel: 'Aluno Y',
          diaSemana: 'Quinta',
        },
      ],
    };
  },
  components: {
    ListaSolicitacoesTable,
  },
};
</script>
