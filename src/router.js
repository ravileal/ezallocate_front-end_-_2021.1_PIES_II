import Vue from 'vue';
import Router from 'vue-router';
import { Auth } from 'aws-amplify';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        // Pages
        {
          name: 'User Profile',
          path: 'pages/user',
          component: () => import('@/views/dashboard/pages/UserProfile'),
        },
        {
          name: 'Notifications',
          path: 'components/notifications',
          component: () => import('@/views/dashboard/component/Notifications'),
        },
        {
          name: 'Icons',
          path: 'components/icons',
          component: () => import('@/views/dashboard/component/Icons'),
        },
        {
          name: 'Typography',
          path: 'components/typography',
          component: () => import('@/views/dashboard/component/Typography'),
        },
        // Tables
        {
          name: 'Regular Tables',
          path: 'tables/regular-tables',
          component: () => import('@/views/dashboard/tables/RegularTables'),
        },
        // Maps
        {
          name: 'Google Maps',
          path: 'maps/google-maps',
          component: () => import('@/views/dashboard/maps/GoogleMaps'),
        },
        // Bloco
        {
          name: 'Bloco',
          path: 'bloco',
          component: () => import('@/views/blocos/pagesBlocos/Bloco'),
        },
        // Sala
        {
          name: 'Sala',
          path: 'sala',
          component: () => import('@/views/blocos/pagesSalas/Sala'),
        },
        // Minhas Solicitações
        {
          name: 'Minhas Solicitações',
          path: 'minhasSolicitacoes',
          component: () => import('@/views/solicitacoes/pagesSolicitacoesUsuario/PageSolicitacoesUsuario'),
        },
        // Aprovar Solicitações
        {
          name: 'Solicitações Pendentes',
          path: 'aprovarSolicitacoes',
          component: () => import('@/views/solicitacoes/pagesAprovarSolicitacoes/PageAprovarSolicitacoes'),
        },
      ],
    },
    {
      path: '/login',
      component: () => import('@/views/login/Index'),
    },
  ],
});

router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    Auth.currentAuthenticatedUser()
      .then(() => {
        next();
      })
      .catch(() => {
        next({
          path: '/login',
        });
      });
  }
  next();
});

export default router;
