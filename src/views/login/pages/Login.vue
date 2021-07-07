<template>
  <div>
    <h2>Entrar</h2>

    <h4 class="error" v-if="erroLogin">Usuario ou senha inválidos</h4>

    <div class="formcontainer">
      <input placeholder="usuario" v-model="usuario" class="input" />
      <input placeholder="senha" type="password" v-model="senha" class="input" />
      <button v-on:click="signIn" class="button">Entrar</button>
    </div>

    <h2 v-if="carregando">Carregando...</h2>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify';

export default {
  name: 'entrar',
  data() {
    return {
      carregando: false,
      erroLogin: false,
    };
  },
  methods: {
    async signIn() {
      this.carregando = true;
      this.erroLogin = await Auth.signIn(this.usuario, this.senha)
        .then(() => false)
        .catch(() => true);
      this.carregando = false;
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
