<template>
  <tbody>
    <tr id="horario-solicitacao" v-for="solicitacao in listSolicitacoes" :key="solicitacao.id">
      <td>{{ solicitacao.horario }}</td>
      <td>{{ solicitacao.descricao }}</td>
      <td><FormInfoModal :solicitacao="solicitacao" /></td>

      <td>
        <v-btn
          color="green"
          v-bind="attrs"
          v-on="on"
          elevation="2"
          x-small
          @click="updateSolicitacao(solicitacao, 'reservado')"
        >
          Aceitar
        </v-btn>
      </td>

      <td>
        <v-btn
          color="red"
          v-bind="attrs"
          v-on="on"
          elevation="2"
          x-small
          @click="updateSolicitacao(solicitacao, 'recusado')"
        >
          Recusar
        </v-btn>
      </td>
    </tr>
  </tbody>
</template>

<script>
import FormInfoModal from '@/views/solicitacoes/components/modal/FormInfoModal';
import axios from '../../../../../axios-client';

export default {
  data() {
    return {
      dialog: false,
    };
  },
  props: ['listSolicitacoes', 'getListOcupacoes'],
  created() {
    console.log(this.listSolicitacoes);
  },
  components: {
    FormInfoModal,
  },
  methods: {
    async updateSolicitacao(solicitacao, status) {
      const data = {
        ...solicitacao,
        status,
      };
      const result = await axios.put('ocupacoes', data);
      console.log(result);
      await this.getListOcupacoes();
    },
  },
};
</script>

<style></style>
