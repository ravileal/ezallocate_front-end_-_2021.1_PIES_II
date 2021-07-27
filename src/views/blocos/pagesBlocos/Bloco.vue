<template>
  <v-container
    id="bloco_"
    fluid
    tag="section"
  >
    <v-row>

      <v-col id="col-bloco-1"
        cols="12"
        lg="4"
      >
        <base-material-chart-card
          color="blue"
          hover-reveal
          type="Bar"
        >
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  color="info"
                  icon
                  v-on="on"
                >
                  <v-icon
                    color="info"
                  >
                    mdi-refresh
                  </v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  light
                  icon
                  v-on="on"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h4 class="card-title font-weight-light mt-2 ml-2">
            Bloco 1
          </h4>

          <a id="btn-bloco-1"
            v-on:click="goToPageBlock(1)"
            target="_self"
            class="d-inline-flex font-weight-light ml-2 mt-1"
            style="text-decoration: none; color: gray"
          >
            Clique aqui para ver as salas existentes neste bloco.
          </a>

          <template v-slot:actions>
          </template>
        </base-material-chart-card>
      </v-col>

      <v-col id="col-bloco-2"
        cols="12"
        lg="4"
      >
        <base-material-chart-card
          color="blue"
          hover-reveal
          type="Line"
        >
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  color="info"
                  icon
                  v-on="on"
                >
                  <v-icon
                    color="info"
                  >
                    mdi-refresh
                  </v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  light
                  icon
                  v-on="on"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h4 class="card-title font-weight-light mt-2 ml-2">
            Bloco 2
          </h4>

          <a id="btn-bloco-2"
            v-on:click="goToPageBlock(2)"
            target="_blank"
            class="d-inline-flex font-weight-light ml-2 mt-1"
            style="text-decoration: none; color: gray"
          >
            Clique aqui para ver as salas existentes neste bloco.
          </a>

          <template v-slot:actions>
          </template>
        </base-material-chart-card>
      </v-col>

      <v-col id="col-bloco-3"
        cols="12"
        lg="4"
      >
        <base-material-chart-card
          color="blue"
          type="Line"
        >
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  color="info"
                  icon
                  v-on="on"
                >
                  <v-icon
                    color="info"
                  >
                    mdi-refresh
                  </v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  light
                  icon
                  v-on="on"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h3 class="card-title font-weight-light mt-2 ml-2">
            Bloco 3
          </h3>

          <a id="btn-bloco-3"
            v-on:click="goToPageBlock(3)"
            target="_blank"
            class="d-inline-flex font-weight-light ml-2 mt-1"
            style="text-decoration: none; color: gray"
          >
            Clique aqui para ver as salas existentes neste bloco.
          </a>

          <template v-slot:actions>
          </template>
        </base-material-chart-card>
      </v-col>

      <v-col id="col-bloco-4"
        cols="12"
        lg="4"
      >
        <base-material-chart-card
          color="blue"
          hover-reveal
          type="Line"
        >
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  color="info"
                  icon
                  v-on="on"
                >
                  <v-icon
                    color="info"
                  >
                    mdi-refresh
                  </v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  light
                  icon
                  v-on="on"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h4 class="card-title font-weight-light mt-2 ml-2">
            Bloco 4
          </h4>

          <a id="btn-bloco-4"
            v-on:click="goToPageBlock(4)"
            target="_blank"
            class="d-inline-flex font-weight-light ml-2 mt-1"
            style="text-decoration: none; color: gray"
          >
            Clique aqui para ver as salas existentes neste bloco.
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
