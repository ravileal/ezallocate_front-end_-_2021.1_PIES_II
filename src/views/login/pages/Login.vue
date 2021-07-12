<template>
  <v-container
    id="login-section"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="16"
        md="10"
      >
        <base-material-card
          color="blue"
          hover-reveal
          type="Bar"
        >
          <template v-slot:heading>
            <div class="text-h3 font-weight-light text-center">
              EzAllocate
            </div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>

                <h4 class="error" id="login-error" v-if="erroLogin">Usuario ou senha inválidos</h4>

                <v-col
                  cols="12"
                  md="12"
                >
                  <v-text-field
                    id="login-email"
                    v-model="user.username"
                    color="blue"
                    class="purple-input"
                    label="Email"
                    type="email"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="12"
                >
                  <v-text-field
                    id="login-password"
                    v-model="user.password"
                    color="blue"
                    class="purple-input"
                    label="Senha"
                    type="password"
                  />
                </v-col>

                <v-col
                  cols="12"
                  class="text-center"
                >
                  <v-btn
                    id="btn-login"
                    v-on:click="signIn"
                    color="blue"
                    class="mr-0"
                  >
                    Entrar
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
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
  margin-top: 20px;
  margin-left: 45px;
  size: 1000px;
}
</style>
