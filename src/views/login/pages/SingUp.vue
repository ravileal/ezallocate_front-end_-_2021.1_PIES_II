<template>
  <div>
    <h2>
      {{ toggleCadastrar ? 'Cadastrar' : 'Confirmar cadastro' }}
    </h2>

    <div class="formcontainer" v-if="toggleCadastrar">
      <input placeholder="usuario" v-model="usuario" class="input" />
      <input placeholder="senha" type="password" v-model="senha" class="input" />
      <input placeholder="email" v-model="email" class="input" />
      <button v-on:click="cadastrar" class="button">Cadastrar</button>
    </div>

    <div class="formcontainer" v-if="!toggleCadastrar">
      <input placeholder="código de confirmação" v-model="authCode" class="input" />
      <button v-on:click="confirmarCadastro" class="button">Confirmar cadastro</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-alert */
import { Auth } from 'aws-amplify';

export default {
  name: 'Signup',
  props: ['toggle'],
  data() {
    return {
      toggleCadastrar: true,
    };
  },
  methods: {
    async cadastrar() {
      try {
        const user = {
          username: this.usuario,
          password: this.senha,
          attributes: { email: this.email },
        };
        await Auth.signUp(user);
        this.toggleCadastrar = false;
      } catch (error) {
        console.log(error);
        console.log('Erro ao realizar cadastro');
      }
    },
    async confirmarCadastro() {
      try {
        await Auth.confirmSignUp(this.usuario, this.authCode);
        alert('Cadastro realizado com sucesso! Realize o login para acessar o sistema');
        this.toggle();
      } catch (err) {
        alert('Código incorreto');
      }
    },
  },
};
</script>

<style>
.formcontainer {
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
}
.input {
  margin-bottom: 7px;
  height: 38px;
  border: none;
  outline: none;
  border-bottom: 2px solid #ddd;
  font-size: 20px;
}
.button {
  height: 45px;
  border: none;
  outline: none;
  background-color: #dddddd;
  margin-top: 8px;
  cursor: pointer;
  font-size: 18px;
}
.button:hover {
  opacity: 0.7;
}
</style>
