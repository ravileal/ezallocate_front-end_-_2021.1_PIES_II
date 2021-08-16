<template>
  <div class="">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="green" v-bind="attrs" v-on="on" elevation="2" x-small :disabled="ocupacao.status === 'livre'">
          Visualizar Informações
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          <h2>INFORMAÇÕES</h2>
          <p id="txt-hora-horario-1">{{ ocupacao.horario }}</p>
        </v-card-title>

        <v-card-text>
          <p>
            Descrição : <label id="txt-descricao-horario-1"> {{ ocupacao.descricao }}</label>
          </p>
          <p>
            Responsável : <label id="txt-responsavel-horario-1"> {{ ocupacao.responsavel }} </label>
          </p>
          <!-- <p>
            Frequência : <label id="txt-frequencia-horario-1"> {{ ocupacao.frequencia }} </label>
          </p> -->
          <p>
            Dia da Semana : <label id="txt-dia-horario-1"> {{ ocupacao.dia_semana }}</label>
          </p>
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

<script>
export default {
  data() {
    return {
      dialog: false,
      horarioAtual: null,
    };
  },
  props: ['ocupacao'],
  created() {
    this.horarioAtual = this.ocupacao;
    const weekDay = this.weekToPortuguese(this.ocupacao.dia_semana);
    this.horarioAtual.dia_semana = weekDay;
  },
  methods: {
    weekToPortuguese(weekDay) {
      console.log(weekDay);
      switch (weekDay) {
        case 'Sunday':
          return 'Domingo';
        case 'Monday':
          return 'Segunda';
        case 'Tuesday':
          return 'Terça';
        case 'Wednesday':
          return 'Quarta';
        case 'Thursday':
          return 'Quinta';
        case 'Friday':
          return 'Sexta';
        case 'Saturday':
          return 'Sábado';
        default:
          return 'Indefinido';
      }
    },
  },
};
</script>

<style></style>
