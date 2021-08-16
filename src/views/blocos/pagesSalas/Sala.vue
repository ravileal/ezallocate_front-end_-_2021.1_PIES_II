<template>
  <v-container id="regular-tables" fluid tag="section">
    <!-- <base-v-component heading="Simple Tables" link="components/simple-tables" /> -->

    <!-- --------------- -->
    <!-- Prótotipo Salas -->
    <base-material-card icon="mdi-alarm" :title="'Horários ' + this.nome" class="px-5 py-3">
      <v-simple-table>
        <thead>
          <tr>
            <th class="primary--text">Status</th>
            <th class="primary--text">Horário</th>
            <th class="primary--text">Atividade</th>
            <th class="primary--text">Informações</th>
            <th class="primary--text">Solicitar Reserva/Alocação</th>
          </tr>
        </thead>

        <HorariosSalaTable :listOcupacao="listOcupacao" :salaId="this.id" />
      </v-simple-table>
    </base-material-card>

    <!-- --------------- -->
    <!-- Prótotipo Salas -->

    <div>
      <h3><p>Status do Horário</p></h3>
      <p><v-avatar color="green" size="15"></v-avatar> Disponível para reserva ou alocação</p>
      <p><v-avatar color="yellow" size="15"></v-avatar> Reservado para atividades diversas</p>
      <p><v-avatar color="red" size="15"></v-avatar> Alocado para aulas semanais</p>
    </div>
  </v-container>
</template>

<script>
import HorariosSalaTable from '@/views/blocos/components/table/HorariosSalaTable';
import moment from 'moment';
import axios from '../../../../axios-client';

export default {
  data() {
    return {
      id: null,
      nome: null,
      listOcupacao: null,
      listHorarios: ['08:00', '10:00', '13:30', '15:30', '18:00', '20:00'],
    };
  },
  components: {
    HorariosSalaTable,
  },
  async created() {
    this.loadDeafultList();
    this.id = this.$router.currentRoute.query.id;
    this.nome = this.$router.currentRoute.query.nome;
    const day = moment().format('YYYY-MM-DD');
    // const day = '2021-08-17';
    const ocupacoes = await axios.get(`ocupacoes/sala/${this.id}?dateDay=${day}`);
    this.filterHorarios(ocupacoes);
  },
  methods: {
    filterHorarios(listOcupacao) {
      const ocupacaoDefault = defaultHorario => this.listOcupacao[this.listHorarios.indexOf(defaultHorario)];
      const findHorarioOcupacao = defaultHorario => listOcupacao.find(({ horario }) => horario === defaultHorario);
      const selectedOcupacao = horario => findHorarioOcupacao(horario) || ocupacaoDefault(horario);
      this.listOcupacao = this.listHorarios.map(selectedOcupacao);
    },
    loadDeafultList() {
      this.listOcupacao = this.listHorarios.map(horario => ({
        status: 'livre',
        horario,
        atividade: 'Livre',
        descricao: 'Sem atividades',
      }));
    },
  },
};
</script>
