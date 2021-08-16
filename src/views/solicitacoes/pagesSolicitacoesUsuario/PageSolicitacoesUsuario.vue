<template>
  <v-container id="regular-tables-minhas-solicitacoes" fluid tag="section">
    <!-- <base-v-component heading="Simple Tables" link="components/simple-tables" /> -->

    <!-- --------------- -->
    <!-- Prótotipo Lista Solicitações -->

    <base-material-card icon="mdi-calendar-clock" title="Minhas Solicitações" class="px-5 py-3">
      <v-simple-table>
        <thead>
          <tr>
            <th class="primary--text">Horário</th>
            <th class="primary--text">Atividade</th>
            <th class="primary--text">Informações</th>
            <th class="primary--text">Cancelar</th>
          </tr>
        </thead>

        <SolicitacoesUserTable :listSolicitacoes="listSolicitacoes" />
      </v-simple-table>
    </base-material-card>

    <!-- --------------- -->
    <!-- Prótotipo Lista Solicitações -->
  </v-container>
</template>

<script>
import SolicitacoesUserTable from '@/views/solicitacoes/pagesSolicitacoesUsuario/components/table/SolicitacoesUserTable';

export default {
  components: {
    SolicitacoesUserTable,
  },
};
</script>
