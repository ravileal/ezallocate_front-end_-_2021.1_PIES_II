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

        <HorariosSalaTable :listSalas="listSalas"/>

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
import HorariosSalaTable from '@/views/blocos/components/table/HorariosSalaTable';

export default {
  data() {
    return {
      listSalas: [
        {
          id: 'b5e80a4e-df99-45e7-9e57-6fc4aca6e7a2',
          status: 'alocado',
          horario: '08:00 - 10:00',
          atividade: 'Aula de Matemática Discreta',
          responsavel: 'Wladmir',
          diaSemana: 'Segunda',
          frequencia: 'Semanalmente',
        },
        {
          status: 'alocado',
          horario: '10:00 - 12:00',
          atividade: 'Aula de Projeto Integrado II',
          responsavel: 'Camilo',
          diaSemana: 'Quarta',
          frequencia: 'Semanalmente',
        },
        {
          status: 'disponivel',
          horario: '13:30 - 15:30',
          atividade: 'Livre',
          responsavel: '',
          diaSemana: '',
          frequencia: '',
        },
        {
          status: 'reservado',
          horario: '15:30 - 17:30',
          atividade: 'Célula de Counter Strike',
          responsavel: 'Aluno X',
          diaSemana: 'Quinta',
          frequencia: 'Semanalmente',
        },
        {
          status: 'disponivel',
          horario: '18:00 - 20:00',
          atividade: 'Livre',
          responsavel: '',
          diaSemana: '',
          frequencia: '',
        },
        {
          status: 'disponivel',
          horario: '20:00 - 22:00',
          atividade: 'Livre',
          responsavel: '',
          diaSemana: '',
          frequencia: '',
        },
      ],
    };
  },
  components: {
    HorariosSalaTable,
  },
};
</script>
