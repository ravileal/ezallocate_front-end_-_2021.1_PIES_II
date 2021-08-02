<template>
  <v-container
    id="bloco_"
    fluid
    tag="section"
  >
    <v-row>

      <v-col id="col-sala-1"
        cols="12"
        lg="3"
      >
        <base-material-chart-card
          color="success"
          hover-reveal
          type="Bar"
        >

          <h4 class="card-title font-weight-light mt-2 ml-2">
            Sala 1
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

      <v-col id="col-sala-2"
        cols="12"
        lg="3"
      >
        <base-material-chart-card
          color="success"
          hover-reveal
          type="Bar"
        >

          <h4 class="card-title font-weight-light mt-2 ml-2">
            Sala 2
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

      <v-col id="col-sala-3"
        cols="12"
        lg="3"
      >
        <base-material-chart-card
          color="success"
          hover-reveal
          type="Bar"
        >

          <h4 class="card-title font-weight-light mt-2 ml-2">
            Sala 3
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

      <v-col id="col-sala-4"
        cols="12"
        lg="3"
      >
        <base-material-chart-card
          color="success"
          hover-reveal
          type="Bar"
        >

          <h4 class="card-title font-weight-light mt-2 ml-2">
            Sala 4
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

      <v-col id="col-sala-5"
        cols="12"
        lg="3"
      >
        <base-material-chart-card
          color="success"
          hover-reveal
          type="Bar"
        >

          <h4 class="card-title font-weight-light mt-2 ml-2">
            Sala 5
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

      <v-col id="col-sala-6"
        cols="12"
        lg="3"
      >
        <base-material-chart-card
          color="success"
          hover-reveal
          type="Bar"
        >

          <h4 class="card-title font-weight-light mt-2 ml-2">
            Sala 6
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

      <v-col id="col-sala-7"
        cols="12"
        lg="3"
      >
        <base-material-chart-card
          color="success"
          hover-reveal
          type="Bar"
        >

          <h4 class="card-title font-weight-light mt-2 ml-2">
            Sala 7
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

      <v-col id="col-sala-8"
        cols="12"
        lg="3"
      >
        <base-material-chart-card
          color="success"
          hover-reveal
          type="Bar"
        >

          <h4 class="card-title font-weight-light mt-2 ml-2">
            Sala 8
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
export default {
  methods: {
    goToPageSala() {
      this.$router.push('sala');
    },
  },
  props: ['index'],
  created() {
    this.indiceBloco = this.$router.currentRoute.query.index;
  },
  data() {
    return {
      indiceBloco: '',
    };
  },
};
</script>

<style>

</style>
