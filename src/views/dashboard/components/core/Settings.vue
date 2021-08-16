<script>
// Mixins
import Proxyable from 'vuetify/lib/mixins/proxyable';
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'DashboardCoreSettings',

  mixins: [Proxyable],

  data: () => ({
    color: '#E91E63',
    colors: ['#9C27b0', '#00CAE3', '#4CAF50', '#ff9800', '#E91E63', '#FF5252'],
    image: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    images: [
      'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
      'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-2.jpg',
      'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-3.jpg',
      'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-4.jpg',
    ],
    menu: false,
    saveImage: '',
    showImg: true,
  }),

  computed: {
    ...mapState(['barImage']),
  },

  watch: {
    color(val) {
      this.$vuetify.theme.themes[this.isDark ? 'dark' : 'light'].primary = val;
    },
    showImg(val) {
      if (!val) {
        this.saveImage = this.barImage;
        this.setBarImage('');
      } else if (this.saveImage) {
        this.setBarImage(this.saveImage);
        this.saveImage = '';
      } else {
        this.setBarImage(val);
      }
    },
    image(val) {
      this.setBarImage(val);
    },
  },

  methods: {
    ...mapMutations({
      setBarImage: 'SET_BAR_IMAGE',
    }),
  },
};
</script>

<style lang="sass">
.v-settings
  .v-item-group > *
    cursor: pointer

  &__item
    border-width: 3px
    border-style: solid
    border-color: transparent !important

    &--active
      border-color: #00cae3 !important
</style>
