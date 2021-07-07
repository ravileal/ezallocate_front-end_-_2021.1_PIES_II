<template>
  <v-app>
    <!-- <LoginPage /> -->
    <!-- <LoginView /> -->
    <div class="auth">
      <SignUpPage :toggle="toggle" v-if="toggleCadastrar" />
      <LoginPage v-if="!toggleCadastrar" />

      <p v-on:click="toggle" class="toggle">
        {{ toggleMensagem() }}
      </p>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'LoginIndex',
  components: {
    // LoginView: () => import('./components/core/View'),
    LoginPage: () => import('./pages/Login'),
    SignUpPage: () => import('./pages/SingUp'),
  },
  data: () => ({
    toggleCadastrar: false,
  }),
  methods: {
    toggle() {
      this.toggleCadastrar = !this.toggleCadastrar;
    },
    toggleMensagem() {
      return this.toggleCadastrar ? 'Já está cadastrado? Relizar Login' : 'Precisa criar uma conta? Cadastrar';
    },
  },
};
</script>

<style>
.auth {
  margin: 0 auto;
  width: 460px;
}
.toggle {
  cursor: pointer;
  font-size: 18px;
}
</style>
