<template>
  <v-container id="regular-tables-solicitacoes" fluid tag="section">
    <!-- <base-v-component heading="Simple Tables" link="components/simple-tables" /> -->

    <!-- --------------- -->
    <!-- Prótotipo Lista Solicitações -->

    <base-material-card icon="mdi-calendar-clock" title="Solicitações Pendentes" class="px-5 py-3">
      <v-simple-table>
        <thead>
          <tr>
            <th class="primary--text">Horário</th>
            <th class="primary--text">Atividade</th>
            <th class="primary--text">Informações</th>
            <th class="primary--text">Aprovar</th>
            <th class="primary--text">Recusar</th>
          </tr>
        </thead>

        <ListaSolicitacoesTable :listSolicitacoes="listSolicitacoes" :getListOcupacoes="getListOcupacoes" />
      </v-simple-table>
    </base-material-card>

    <!-- --------------- -->
    <!-- Prótotipo Lista Solicitações -->
  </v-container>
</template>

<script>
import ListaSolicitacoesTable from '@/views/solicitacoes/components/table/ListaSolicitacoesTable';
import { Auth } from 'aws-amplify';
import axios from '../../../../axios-client';

export default {
  data() {
    return {
      listSolicitacoes: null,
      user: null,
    };
  },
  components: {
    ListaSolicitacoesTable,
  },
  async beforeCreate() {
    const { attributes } = await Auth.currentAuthenticatedUser();
    this.user = attributes;
    await this.getListOcupacoes();
  },
  methods: {
    async getListOcupacoes() {
      const listOcupacoes = await axios.get('ocupacoes');
      this.listSolicitacoes = listOcupacoes.filter(
        item => item.responsavel === this.user.name && item.status === 'pendente' && !item.prof_responsavel,
      );
    },
  },
};
</script>
