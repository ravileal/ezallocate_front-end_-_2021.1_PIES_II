<template>
  <tbody>
    <tr id="horario-solicitacao" v-for="solicitacao in listSolicitacoes" :key="solicitacao.id">
      <td>{{ solicitacao.horario }}</td>
      <td>{{ solicitacao.descricao }}</td>
      <td><FormInfoModal :solicitacao="solicitacao" /></td>
      <td>
        <v-btn
          color="red"
          v-on="on"
          elevation="2"
          x-small
          :disabled="solicitacao.status !== 'pendente'"
          @click="cancelSolicitacao(solicitacao)"
        >
          Cancelar
        </v-btn>
      </td>
    </tr>
  </tbody>
</template>

<script>
import { Auth } from 'aws-amplify';
import FormInfoModal from '@/views/solicitacoes/components/modal/FormInfoModal';
import axios from '../../../../../../axios-client';

export default {
  data() {
    return {
      listSolicitacoes: [],
      dialog: false,
    };
  },
  components: {
    FormInfoModal,
  },
  async beforeCreate() {
    const { attributes } = await Auth.currentAuthenticatedUser();
    this.user = attributes;
    await this.getListOcupacoes();
  },
  methods: {
    async cancelSolicitacao(solicitacao) {
      const data = {
        ...solicitacao,
        status: 'cancelado',
      };
      await axios.put('ocupacoes', data);
      await this.getListOcupacoes();
    },
    async getListOcupacoes() {
      const listOcupacoes = await axios.get('ocupacoes');
      this.listSolicitacoes = listOcupacoes.filter(item => item.responsavel === this.user.name);
    },
  },
};
</script>

<style></style>
