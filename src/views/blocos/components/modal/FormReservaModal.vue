<template>

  <v-dialog
    v-model="dialog"
    persistent
    max-width="600px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="green"
        v-bind="attrs"
        v-on="on"
        elevation="2"
        x-small
        :disabled="sala.status!=='disponivel'"
        >
        Solicitar Reserva
      </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <span class="text-h3">Solicitar Reserva</span>
        <h4 class="text-h4"> {{sala.horario}} </h4>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col
              cols="12"
            >
              <v-text-field
                label="Descrição da atividade*"
                required
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"

            >
              <v-select
                :items="['', 'Camilo', 'Wladmir', 'Diana', 'Carla']"
                label="Escolha o professor responsável"
              ></v-select>
            </v-col>

            <!-- <v-card-title>
              <span class="text-h5">Frequência de uso</span>
            </v-card-title>

            <template>
              <v-container fluid class="align-center">
                <v-radio-group
                  v-model="row"
                  row
                >
                  <v-radio
                    label="Semanalmente"
                    value="semanalmente"
                  ></v-radio>
                  <v-radio
                    label="Até o fim do semestre"
                    value="fimSemestre"
                  ></v-radio>
                </v-radio-group>
              </v-container>
            </template>

            <v-col
              cols="12"
            >
              <v-select
                :items="['1 semana', '2 semanas', '3 semanas', '4 semanas']"
                label="Indique o período para reserva"
              ></v-select>
            </v-col> -->

          </v-row>
        </v-container>
        <small>*Campos Obrigatórios</small>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue darken-1"
          text
          @click="dialog = false"
        >
          Cancelar
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="dialog = false"
        >
          Confirmar Solicitação
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<script>
// <v-btn id="btn-reserva-horario-1" color="green" v-bind="attrs" v-on="on" elevation="2" x-small disabled> Solicitar Reserva </v-btn>;
export default {
  data() {
    return {
      dialog: false,
    };
  },
  props: ['sala'],
};
</script>

<style>

</style>
