<template>
  <tbody>
    <tr id="horario-1" v-for="ocupacao in listOcupacao" :key="ocupacao.id">
      <td>
        <v-avatar :color="statusColor[ocupacao.status]" size="15"></v-avatar>
      </td>
      <td>{{ ocupacao.horario }}</td>
      <td>{{ ocupacao.descricao }}</td>
      <td>
        <InfoHorariosModal :ocupacao="ocupacao" />
      </td>
      <td>
        <FormReservaModal :ocupacao="ocupacao" :salaId="salaId" />
      </td>
    </tr>
  </tbody>
</template>

<script>
import InfoHorariosModal from '@/views/blocos/components/modal/InfoHorariosModal';
import FormReservaModal from '@/views/blocos/components/modal/FormReservaModal';

export default {
  data() {
    return {
      dialog: false,
      statusColor: {
        alocado: 'red',
        reservado: 'yellow',
        livre: 'green',
      },
      notIsAdmin: true,
    };
  },
  props: ['listOcupacao', 'salaId'],
  components: {
    InfoHorariosModal,
    FormReservaModal,
  },
};
</script>

<style></style>
