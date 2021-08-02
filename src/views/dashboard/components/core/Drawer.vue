<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    src="https://media.discordapp.net/attachments/780442072917737542/862817737839738920/unknown.png?width=296&height=682"
    mobile-break-point="960"
    app
    width="260"
    v-bind="$attrs"
  >
    <template v-slot:img="props">
      <v-img :gradient="`to bottom, ${barColor}`" v-bind="props" />
    </template>

    <v-divider class="mb-1" />

    <v-list dense nav>
      <v-list-item>
        <v-list-item-avatar class="align-self-center" color="white" contain>
          <!-- <v-img src="https://demos.creative-tim.com/vuetify-material-dashboard/favicon.ico" max-height="30" /> -->
          <v-img src="https://www.facom.ufms.br/wp-content/uploads/2018/07/palestra.png"/>
        </v-list-item-avatar>

        <v-list-item-content>
          <!-- <v-list-item-title class="text-h4" v-text="profile.title" /> -->
          <p class="align-self-center" style="margin-top: 25px">Nome do Usuário<p/>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="mb-2" />

    <v-list expand nav>
      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />

      <template v-for="(item, i) in computedItems">
        <base-item-group v-if="item.children" :key="`group-${i}`" :item="item">

        </base-item-group>

        <base-item v-else :key="`item-${i}`" :item="item" />
      </template>

      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />
    </v-list>

    <template v-slot:append>
      <div class="signout" v-on:click="signout">
        <img src="@/assets/icons/exit.svg" alt="Imagem botao sair" />
        <span>Sair</span>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>

// Utilities
import { mapState } from 'vuex';
import { Auth } from 'aws-amplify';

export default {
  name: 'DashboardCoreDrawer',

  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    items: [
      {
        icon: 'mdi-view-dashboard',
        title: 'dashboard',
        to: '/',
      },
      {
        icon: 'mdi-calendar-account',
        title: 'Minhas Solicitações',
        to: '/minhasSolicitacoes',
      },
      {
        icon: 'mdi-calendar-clock',
        title: 'Solicitações Pendentes',
        to: '/aprovarSolicitacoes',
      },
      {
        icon: 'mdi-account',
        title: 'user',
        to: '/pages/user',
      },
      // {
      //   // title: 'rtables',
      //   title: 'Salas',
      //   icon: 'mdi-clipboard-outline',
      //   to: '/tables/regular-tables',
      // },
      // {
      //   title: 'typography',
      //   icon: 'mdi-format-font',
      //   to: '/components/typography',
      // },
      // {
      //   title: 'icons',
      //   icon: 'mdi-chart-bubble',
      //   to: '/components/icons',
      // },
      // {
      //   title: 'google',
      //   icon: 'mdi-map-marker',
      //   to: '/maps/google-maps',
      // },
      // {
      //   title: 'notifications',
      //   icon: 'mdi-bell',
      //   to: '/components/notifications',
      // },
    ],
  }),

  computed: {
    ...mapState(['barColor', 'barImage']),
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit('SET_DRAWER', val);
      },
    },
    computedItems() {
      return this.items.map(this.mapItem);
    },
    profile() {
      return {
        avatar: true,
        title: this.$t('avatar'),
      };
    },
  },

  methods: {
    mapItem(item) {
      return {
        ...item,
        children: item.children ? item.children.map(this.mapItem) : undefined,
        title: this.$t(item.title),
      };
    },
    signout() {
      Auth.signOut()
        .then(data => console.log(data))
        .catch(err => console.log(err));
    },
  },

};

</script>

<style lang="sass">
@import '~vuetify/src/styles/tools/_rtl.sass'

.signout
  width: max
  margin-top: 15px
  padding-bottom: 15px
  padding-top: 15px
  display: flex
  justify-content: center
  align-items: center
  cursor: pointer
  color: #FFFFFF
  font-family: "Roboto", sans-serif
  font-weight: 300
  gap: 15px
  background-color: rgba(255, 255, 255, 0.1)

  &:before
    background-color: #FFFFFF !important

  &:hover
    background-color: rgba(255, 255, 255, 0.3)
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1)

#core-navigation-drawer
  .v-list-group__header.v-list-item--active:before
    opacity: .24

  .v-list-item
    &__icon--text,
    &__icon:first-child
      justify-content: center
      text-align: center
      width: 20px

      +ltr()
        margin-right: 24px
        margin-left: 12px !important

      +rtl()
        margin-left: 24px
        margin-right: 12px !important

  .v-list--dense
    .v-list-item
      &__icon--text,
      &__icon:first-child
        margin-top: 10px

  .v-list-group--sub-group
    .v-list-item
      +ltr()
        padding-left: 8px

      +rtl()
        padding-right: 8px

    .v-list-group__header
      +ltr()
        padding-right: 0

      +rtl()
        padding-right: 0

      .v-list-item__icon--text
        margin-top: 19px
        order: 0

      .v-list-group__header__prepend-icon
        order: 2

        +ltr()
          margin-right: 8px

        +rtl()
          margin-left: 8px
</style>
