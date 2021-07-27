<template>
    <tbody>
        <tr id="horario-1" v-for="sala in listSalas" :key="sala.id">
            <td>
                <v-avatar
                  :color="statusColor[sala.status]"
                  size="15"
                ></v-avatar>
            </td>
            <td> {{sala.horario}}</td>
            <td> {{sala.atividade}} </td>
            <td>
                <InfoHorariosModal :sala="sala"/>
            </td>
            <td>
                <FormReservaModal :sala="sala"/>
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
        disponivel: 'green',
      },
    };
  },
  props: ['listSalas'],
  created() {
    console.log(this.listSalas);
  },
  components: {
    InfoHorariosModal,
    FormReservaModal,
  },
};
</script>

<style>

</style>
