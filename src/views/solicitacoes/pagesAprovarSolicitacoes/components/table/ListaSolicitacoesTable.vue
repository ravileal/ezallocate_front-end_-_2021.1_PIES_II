<template>
    <tbody>
        <tr id="horario-solicitacao" v-for="solicitacao in listSolicitacoes" :key="solicitacao.id">
            <td> {{solicitacao.horario}} </td>
            <td> {{solicitacao.atividade}} </td>
            <td> <FormInfoModal :solicitacao="solicitacao"/> </td>

            <td>
              <v-btn
                color="green"
                v-bind="attrs"
                v-on="on"
                elevation="2"
                x-small
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
              >
              Recusar
              </v-btn>
            </td>

        </tr>
    </tbody>

</template>

<script>
import FormInfoModal from '@/views/solicitacoes/pagesAprovarSolicitacoes/components/modal/FormInfoModal';

export default {
  data() {
    return {
      dialog: false,
    };
  },
  props: ['listSolicitacoes'],
  created() {
    console.log(this.listSolicitacoes);
  },
  components: {
    FormInfoModal,
  },
};
</script>

<style>

</style>
