<template>
  <v-container id="dashboard" fluid tag="section">
    <v-row>
      <v-col id="col-salas-alocadas" cols="12" sm="6" lg="4">
        <base-material-stats-card color="red" icon="mdi-calendar-lock" title="Horários alocados" :value="alocados" />
      </v-col>

      <v-col id="col-salas-reservadas" cols="12" sm="6" lg="4">
        <base-material-stats-card
          color="#FFF176"
          icon="mdi-calendar-refresh"
          title="Horários reservados"
          :value="reservados"
        />
      </v-col>

      <!-- <v-col id="col-salas-disponiveis" cols="12" sm="6" lg="3">
        <base-material-stats-card
          color="success"
          icon="mdi-calendar-check"
          title="Horários disponíveis"
          :value="disponiveis"
        />
      </v-col> -->

      <v-col id="col-salas-solicitacoes" cols="12" sm="6" lg="4">
        <base-material-stats-card
          color="orange"
          icon="mdi-calendar-alert"
          title="Solicitações de reserva"
          :value="solicitacoes"
        />
      </v-col>

      <v-col id="col-bloco-1" cols="12" lg="4">
        <base-material-chart-card color="bloco1" hover-reveal type="Bar">
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" color="info" icon v-on="on">
                  <v-icon color="info"> mdi-refresh </v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" light icon v-on="on">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h4 class="card-title font-weight-light mt-2 ml-2">Bloco 1</h4>

          <a
            id="btn-bloco-1"
            v-on:click="goToPageBlock(1)"
            target="_self"
            class="d-inline-flex font-weight-light ml-2 mt-1"
            style="text-decoration: none; color: gray"
          >
            Clique aqui para ver as salas existentes neste bloco.
          </a>

          <template v-slot:actions> </template>
        </base-material-chart-card>
      </v-col>

      <v-col id="col-bloco-2" cols="12" lg="4">
        <base-material-chart-card color="bloco2" hover-reveal type="Line">
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" color="info" icon v-on="on">
                  <v-icon color="info"> mdi-refresh </v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" light icon v-on="on">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h4 class="card-title font-weight-light mt-2 ml-2">Bloco 2</h4>

          <a
            id="btn-bloco-2"
            v-on:click="goToPageBlock(2)"
            target="_blank"
            class="d-inline-flex font-weight-light ml-2 mt-1"
            style="text-decoration: none; color: gray"
          >
            Clique aqui para ver as salas existentes neste bloco.
          </a>

          <template v-slot:actions> </template>
        </base-material-chart-card>
      </v-col>

      <v-col id="col-bloco-3" cols="12" lg="4">
        <base-material-chart-card color="bloco3" type="Line">
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" color="info" icon v-on="on">
                  <v-icon color="info"> mdi-refresh </v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" light icon v-on="on">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h3 class="card-title font-weight-light mt-2 ml-2">Bloco 3</h3>

          <a
            id="btn-bloco-3"
            v-on:click="goToPageBlock(3)"
            target="_blank"
            class="d-inline-flex font-weight-light ml-2 mt-1"
            style="text-decoration: none; color: gray"
          >
            Clique aqui para ver as salas existentes neste bloco.
          </a>

          <template v-slot:actions> </template>
        </base-material-chart-card>
      </v-col>

      <v-col id="col-bloco-4" cols="12" lg="4">
        <base-material-chart-card color="bloco4" hover-reveal type="Line">
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" color="info" icon v-on="on">
                  <v-icon color="info"> mdi-refresh </v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" light icon v-on="on">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h4 class="card-title font-weight-light mt-2 ml-2">Bloco 4</h4>

          <a
            id="btn-bloco-4"
            v-on:click="goToPageBlock(4)"
            target="_blank"
            class="d-inline-flex font-weight-light ml-2 mt-1"
            style="text-decoration: none; color: gray"
          >
            Clique aqui para ver as salas existentes neste bloco.
          </a>

          <template v-slot:actions> </template>
        </base-material-chart-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Auth } from 'aws-amplify';
import axios from '../../../axios-client';

export default {
  name: 'DashboardDashboard',

  data() {
    return {
      user: '',
      alocados: 0,
      reservados: 0,
      solicitacoes: 0,
      disponiveis: 0,
      dailySalesChart: {
        data: {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [[12, 17, 7, 17, 23, 18, 38]],
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      },
      dataCompletedTasksChart: {
        data: {
          labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]],
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      },
      emailsSubionChart: {
        data: {
          labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
          series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]],
        },
        options: {
          axisX: {
            showGrid: false,
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0,
          },
        },
        responsiveOptions: [
          [
            'screen and (max-width: 640px)',
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc(value) {
                  return value[0];
                },
              },
            },
          ],
        ],
      },
      headers: [],
      tabs: 0,
      tasks: {
        0: [],
      },
      list: {},
    };
  },

  async beforeCreate() {
    this.user = await Auth.currentAuthenticatedUser();
    const ocupacoes = await axios.get('ocupacoes');
    this.reservados = ocupacoes.reduce((acc, ocupacao) => (ocupacao.status === 'reservado' ? acc + 1 : acc), 0);
    this.alocados = ocupacoes.reduce((acc, ocupacao) => (ocupacao.status === 'alocado' ? acc + 1 : acc), 0);
    this.solicitacoes = ocupacoes.reduce((acc, ocupacao) => (ocupacao.status === 'pendente' ? acc + 1 : acc), 0);
  },

  methods: {
    complete(index) {
      this.list[index] = !this.list[index];
    },
    goToPageBlock(blockIndex) {
      this.$router.push({
        path: `/bloco?index=${blockIndex}`,
      });
    },
  },
};
</script>

<style lang="sass">
.flex-wrap
  .bloco1
    background-image: url("../../assets/blocos/bloco1.png") !important
    background-size: 100% 100%
  .bloco2
    background-image: url("../../assets/blocos/bloco2.png") !important
    background-size: 100% 100%
  .bloco3
    background-image: url("../../assets/blocos/bloco3.png") !important
    background-size: 100% 100%
  .bloco4
    background-image: url("../../assets/blocos/bloco4.png") !important
    background-size: 100% 100%
</style>
