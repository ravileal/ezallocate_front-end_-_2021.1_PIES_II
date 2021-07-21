<template>
  <v-container id="regular-tables" fluid tag="section">
    <!-- <base-v-component heading="Simple Tables" link="components/simple-tables" /> -->

<!-- --------------- -->
<!-- Prótotipo Salas -->
    <base-material-card
      icon="mdi-alarm"
      title="Horários Sala 1"
      class="px-5 py-3"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th class="primary--text">
              Status
            </th>
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
              Solicitar Reserva/Alocação
            </th>
          </tr>
        </thead>

        <tbody>
          <tr id="horario-1">
            <td>
              <v-avatar
                color="red"
                size="15"
              ></v-avatar>
            </td>
            <td> 08:00 - 10:00</td>
            <td> Aula de Matemática Discreta </td>
            <td>

              <!-- <template>
                <div class="">
                  <v-dialog
                    v-model="dialog"
                    width="500"
                  >
                    <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="green"
                            v-bind="attrs"
                            v-on="on"
                            elevation="2"
                            x-small
                          >
                            Visualizar Informações
                          </v-btn>
                    </template>

                    <v-card>
                      <v-card-title class="text-h5 grey lighten-2">
                        <h2> INFORMAÇÕES </h2>
                        <p id="txt-hora-horario-1"> 08:00 - 10:00</p>
                      </v-card-title>

                      <v-card-text>
                        <p> Descrição : <label id="txt-descricao-horario-1"> Aula de Matemática Discreta </label> </p>
                        <p> Responsável : <label id="txt-responsavel-horario-1"> Wladmir </label> </p>
                        <p> Frequência : <label id="txt-frequencia-horario-1"> Semanalmente </label> </p>
                        <p> Dia da Semana : <label id="txt-dia-horario-1"> Segunda </label> </p>
                      </v-card-text>

                      <v-divider></v-divider>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" text @click="dialog = false"> OK </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
              </template> -->

            </td>
            <td>
                <v-btn id="btn-reserva-horario-1" color="green" v-bind="attrs" v-on="on" elevation="2" x-small disabled> Solicitar Reserva </v-btn>
            </td>
          </tr>

          <tr id="horario-2">
            <td>
              <v-avatar
                color="red"
                size="15"
              ></v-avatar>
            </td>
            <td> 10:00 - 12:00</td>
            <td> Aula de Projeto Integrado II </td>
            <td>

              <template>
                <div class="">
                  <v-dialog
                    v-model="dialog"
                    width="500"
                  >
                    <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="green"
                            v-bind="attrs"
                            v-on="on"
                            elevation="2"
                            x-small
                          >
                            Visualizar Informações
                          </v-btn>
                    </template>

                    <v-card>
                      <v-card-title class="text-h5 grey lighten-2">
                        <h2> INFORMAÇÕES </h2>
                        <p id="txt-hora-horario-2"> 10:00 - 12:00</p>
                      </v-card-title>

                      <v-card-text>
                        <p> Descrição : <label id="txt-descricao-horario-2"> Aula de Projeto Integrado II </label> </p>
                        <p> Responsável : <label id="txt-responsavel-horario-2"> Camilo </label> </p>
                        <p> Frequência : <label id="txt-frequencia-horario-2"> Semanalmente </label> </p>
                        <p> Dia da Semana : <label id="txt-dia-horario-2"> Quarta </label> </p>
                      </v-card-text>

                      <v-divider></v-divider>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" text @click="dialog = false"> OK </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
              </template>

            </td>
            <td>
                <v-btn id="btn-reserva-horario-2" color="green" v-bind="attrs" v-on="on" elevation="2" x-small disabled> Solicitar Reserva </v-btn>
            </td>
          </tr>

          <tr id="horario-3">
            <td>
              <v-avatar
                color="green"
                size="15"
              ></v-avatar>
            </td>
            <td> 13:30 - 15:30</td>
            <td> Sala Livre </td>
            <td>

              <!-- <template>
                <div class="">
                  <v-dialog
                    v-model="dialog"
                    width="500"
                  >
                    <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="green"
                            v-bind="attrs"
                            v-on="on"
                            elevation="2"
                            x-small
                          >
                            Visualizar Informações
                          </v-btn>
                    </template>

                    <v-card>
                      <v-card-title class="text-h5 grey lighten-2">
                        <h2> INFORMAÇÕES </h2>
                        <p id="txt-hora-horario-3"> 13:30 - 15:30</p>
                      </v-card-title>

                      <v-card-text>
                        <p> Descrição : <label id="txt-descricao-horario-3">  </label> </p>
                        <p> Responsável : <label id="txt-responsavel-horario-3">  </label> </p>
                        <p> Frequência : <label id="txt-frequencia-horario-3">  </label> </p>
                        <p> Dia da Semana : <label id="txt-dia-horario-3">  </label> </p>
                      </v-card-text>

                      <v-divider></v-divider>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" text @click="dialog = false"> OK </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
              </template> -->

            </td>
            <td>
                <v-btn id="btn-reserva-horario-3" color="green" v-bind="attrs" v-on="on" elevation="2" x-small> Solicitar Reserva </v-btn>
            </td>
          </tr>

          <tr id="horario-4">
            <td>
              <v-avatar
                color="green"
                size="15"
              ></v-avatar>
            </td>
            <td> 15:30 - 17:30</td>
            <td> Sala Livre </td>
            <td>

              <!-- <template>
                <div class="">
                  <v-dialog
                    v-model="dialog"
                    width="500"
                  >
                    <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="green"
                            v-bind="attrs"
                            v-on="on"
                            elevation="2"
                            x-small
                          >
                            Visualizar Informações
                          </v-btn>
                    </template>

                    <v-card>
                      <v-card-title class="text-h5 grey lighten-2">
                        <h2> INFORMAÇÕES </h2>
                        <p id="txt-hora-horario-4"> 15:30 - 17:30</p>
                      </v-card-title>

                      <v-card-text>
                        <p> Descrição : <label id="txt-descricao-horario-4">  </label> </p>
                        <p> Responsável : <label id="txt-responsavel-horario-4">  </label> </p>
                        <p> Frequência : <label id="txt-frequencia-horario-4">  </label> </p>
                        <p> Dia da Semana : <label id="txt-dia-horario-4">  </label> </p>
                      </v-card-text>

                      <v-divider></v-divider>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" text @click="dialog = false"> OK </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
              </template> -->

            </td>
            <td>
                <v-btn id="btn-reserva-horario-4" color="green" v-bind="attrs" v-on="on" elevation="2" x-small> Solicitar Reserva </v-btn>
            </td>
          </tr>

          <tr id="horario-5">
            <td>
              <v-avatar
                color="yellow"
                size="15"
              ></v-avatar>
            </td>
            <td> 18:00 - 20:00</td>
            <td> Célula de CS </td>
            <td>

              <!-- <template>
                <div class="">
                  <v-dialog
                    v-model="dialog"
                    width="500"
                  >
                    <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="green"
                            v-bind="attrs"
                            v-on="on"
                            elevation="2"
                            x-small
                          >
                            Visualizar Informações
                          </v-btn>
                    </template>

                    <v-card>
                      <v-card-title class="text-h5 grey lighten-2">
                        <h2> INFORMAÇÕES </h2>
                        <p id="txt-hora-horario-4"> 18:00 - 20:00</p>
                      </v-card-title>

                      <v-card-text>
                        <p> Descrição : <label id="txt-descricao-horario-5"> Célula de Counter Strike </label> </p>
                        <p> Responsável : <label id="txt-responsavel-horario-5"> Aluno X </label> </p>
                        <p> Frequência : <label id="txt-frequencia-horario-5"> Semanalmente </label> </p>
                        <p> Dia da Semana : <label id="txt-dia-horario-5"> Quinta </label> </p>
                      </v-card-text>

                      <v-divider></v-divider>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" text @click="dialog = false"> OK </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
              </template> -->

            </td>
            <td>
                <v-btn id="btn-reserva-horario-5" color="green" v-bind="attrs" v-on="on" elevation="2" x-small disabled> Solicitar Reserva </v-btn>
            </td>
          </tr>

          <tr id="horario-6">
            <td>
              <v-avatar
                color="green"
                size="15"
              ></v-avatar>
            </td>
            <td> 20:00 - 22:00 </td>
            <td> Sala Livre </td>
            <td>

              <!-- <template>
                <div class="">
                  <v-dialog
                    v-model="dialog"
                    width="500"
                  >
                    <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="green"
                            v-bind="attrs"
                            v-on="on"
                            elevation="2"
                            x-small
                          >
                            Visualizar Informações
                          </v-btn>
                    </template>

                    <v-card>
                      <v-card-title class="text-h5 grey lighten-2">
                        <h2> INFORMAÇÕES </h2>
                        <p id="txt-hora-horario-4"> 20:00 - 22:00</p>
                      </v-card-title>

                      <v-card-text>
                        <p> Descrição : <label id="txt-descricao-horario-6">  </label> </p>
                        <p> Responsável : <label id="txt-responsavel-horario-6">  </label> </p>
                        <p> Frequência : <label id="txt-frequencia-horario-6">  </label> </p>
                        <p> Dia da Semana : <label id="txt-dia-horario-6">  </label> </p>
                      </v-card-text>

                      <v-divider></v-divider>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" text @click="dialog = false"> OK </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
              </template> -->

            </td>
            <td>
                <v-btn id="btn-reserva-horario-6" color="green" v-bind="attrs" v-on="on" elevation="2" x-small> Solicitar Reserva </v-btn>
            </td>
          </tr>

        </tbody>
      </v-simple-table>
    </base-material-card>

    <!-- --------------- -->
    <!-- Prótotipo Salas -->

    <div>
      <h3><p>  Status do Horário  </p></h3>
      <p> <v-avatar color="green" size="15"></v-avatar> Disponível para reserva ou alocação </p>
      <p> <v-avatar color="yellow" size="15"></v-avatar> Reservado para atividades diversas </p>
      <p> <v-avatar color="red" size="15"></v-avatar> Alocado para aulas semanais </p>
    </div>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
