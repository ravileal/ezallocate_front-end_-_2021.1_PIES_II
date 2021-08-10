<template>
  <v-container
    id="bloco_"
    fluid
    tag="section"
  >
  <v-row>
    <v-col
      v-for="(sala, index) in listSalas" :key="index"
      :id="'col-sala-' + index"
      cols="12"
      lg="3"
    >
      <base-material-chart-card
        color="success"
        hover-reveal
        type="Bar"
      >

        <h4 class="card-title font-weight-light mt-2 ml-2">
          {{sala.nome}}
        </h4>

        <a id="btn-bloco-1"
          v-on:click="goToPageSala()"
          target="_self"
          class="d-inline-flex font-weight-light ml-2 mt-1"
          style="text-decoration: none; color: gray"
        >
          Clique aqui para visualizar horários da sala.
        </a>

        <template v-slot:actions>
        </template>
      </base-material-chart-card>
    </v-col>
  </v-row>

  </v-container>
</template>

<script>
import axios from '../../../../axios-client';

export default {
  methods: {
    goToPageSala() {
      this.$router.push('sala');
    },
  },
  props: ['index'],
  async created() {
    this.indiceBloco = this.$router.currentRoute.query.index;
    this.listSalas = await axios.get(`salas/bloco/Bloco ${this.indiceBloco}`);
  },
  data() {
    return {
      listSalas: [],
      indiceBloco: '',
    };
  },
};
</script>

<style>

</style>
