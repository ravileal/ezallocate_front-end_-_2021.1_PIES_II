<template>
  <v-app>
    <dashboard-core-app-bar />

    <dashboard-core-drawer />

    <dashboard-core-view />

    <dashboard-core-settings />
  </v-app>
</template>

<script>
import { Auth } from 'aws-amplify';

export default {
  name: 'DashboardIndex',

  components: {
    DashboardCoreAppBar: () => import('./components/core/AppBar'),
    DashboardCoreDrawer: () => import('./components/core/Drawer'),
    DashboardCoreSettings: () => import('./components/core/Settings'),
    DashboardCoreView: () => import('./components/core/View'),
  },

  data: () => ({
    expandOnHover: false,
  }),
  async beforeCreate() {
    this.logado = await Auth.currentAuthenticatedUser()
      .then(() => true)
      .catch(() => false);
    if (!this.logado) this.$router.push('/login');
  },
};
</script>
