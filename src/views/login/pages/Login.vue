<template>
  <div>
    <h2>Entrar</h2>

    <h4 class="error" v-if="erroLogin">Usuario ou senha inválidos</h4>

    <div class="formcontainer">
      <input placeholder="email" type="email" v-model="user.username" class="input" />
      <input placeholder="senha" type="password" v-model="user.password" class="input" />
      <button v-on:click="signIn" class="button">Entrar</button>
    </div>

    <h2 v-if="carregando">Carregando...</h2>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify';

export default {
  name: 'Login',
  data() {
    return {
      carregando: false,
      erroLogin: false,
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async signIn() {
      this.carregando = true;
      this.erroLogin = await Auth.signIn(this.user.username, this.user.password)
        .then(() => false)
        .catch(() => true);
      this.carregando = false;
    },
  },
};
</script>

<style scoped>
.error {
  color: white;
}
</style>
