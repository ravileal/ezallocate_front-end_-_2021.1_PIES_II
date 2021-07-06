<template>
  <v-app>
    <LoginView />
  </v-app>
</template>

<script>
export default {
  name: 'LoginIndex',

  components: {
    LoginView: () => import('./components/core/View'),
  },

  data: () => ({
    expandOnHover: false,
  }),
};
</script>
