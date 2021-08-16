<template>
  <v-app-bar id="app-bar" absolute app color="transparent" flat height="75">
    <v-btn class="mr-3" elevation="1" fab small @click="setDrawer(!drawer)">
      <v-icon v-if="value"> mdi-view-quilt </v-icon>

      <v-icon v-else> mdi-dots-vertical </v-icon>
    </v-btn>

    <v-toolbar-title class="hidden-sm-and-down font-weight-light" v-text="$route.name" />

    <v-spacer />

    <div class="mx-3" />

    <v-btn class="ml-2" min-width="0" text to="/">
      <v-icon>mdi-view-dashboard</v-icon>
    </v-btn>

    <v-btn class="ml-2" min-width="0" text to="/minhasSolicitacoes" v-show="showMinhasSolicitacoes">
      <v-icon>mdi-calendar-account</v-icon>
    </v-btn>

    <v-btn class="ml-2" min-width="0" text to="/aprovarSolicitacoes" v-show="showAprovarSolicitacoes">
      <v-icon>mdi-calendar-clock</v-icon>
    </v-btn>

    <v-menu bottom left offset-y origin="top right" transition="scale-transition">
      <v-list :tile="false" nav>
        <div>
          <app-bar-item v-for="(n, i) in notifications" :key="`item-${i}`">
            <v-list-item-title v-text="n" />
          </app-bar-item>
        </div>
      </v-list>
    </v-menu>

    <v-btn class="ml-2" min-width="0" text to="/pages/user">
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
/* eslint-disable implicit-arrow-linebreak */
// Components
import { VHover, VListItem } from 'vuetify/lib';
import { Auth } from 'aws-amplify';

// Utilities
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'DashboardCoreAppBar',

  components: {
    AppBarItem: {
      render(h) {
        return h(VHover, {
          scopedSlots: {
            default: ({ hover }) =>
              h(
                VListItem,
                {
                  attrs: this.$attrs,
                  class: {
                    'black--text': !hover,
                    'white--text secondary elevation-12': hover,
                  },
                  props: {
                    activeClass: '',
                    dark: hover,
                    link: true,
                    ...this.$attrs,
                  },
                },
                this.$slots.default,
              ),
          },
        });
      },
    },
  },

  props: {
    value: {
      type: Boolean,
      default: false,
      showMinhasSolicitacoes: false,
      showAprovarSolicitacoes: false,
    },
  },

  data: () => ({
    notifications: [
      'Mike John Responded to your email',
      'You have 5 new tasks',
      "You're now friends with Andrew",
      'Another Notification',
      'Another one',
    ],
  }),

  computed: {
    ...mapState(['drawer']),
  },
  async beforeCreate() {
    this.user = await Auth.currentAuthenticatedUser();
    const type = this.user.attributes['custom:type'].toLowerCase();
    this.configureCustomActions(type);
  },
  methods: {
    ...mapMutations({
      setDrawer: 'SET_DRAWER',
    }),
    configureCustomActions(type) {
      switch (type) {
        case 'admin':
          this.showAprovarSolicitacoes = true;
          break;
        case 'professor':
          this.showAprovarSolicitacoes = true;
          break;
        case 'aluno':
          this.showMinhasSolicitacoes = true;
          break;
        default:
      }
    },
  },
};
</script>
