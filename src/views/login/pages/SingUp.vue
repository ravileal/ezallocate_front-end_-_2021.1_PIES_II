<template>
  <v-container
    id="signup-section"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="16"
        md="16"
      >
        <base-material-card
          color="blue"
          hover-reveal
          type="Bar"
        >
          <template v-slot:heading>
            <div class="text-h3 font-weight-light text-center" >
              EzAllocate
            </div>
          </template>

          <div class="text-h3 font-weight-light text-center" id="signup-text">
            <br/>
            Complete seu cadastro
          </div>

          <v-form
            v-if="toggleCadastrar"
            class="formcontainer"
            id="signup-form">
            <v-container class="py-0">
              <v-row>

                <v-col
                  cols="12"
                  md="8"
                >
                  <v-text-field
                    id="signup-email"
                    v-model="user.username"
                    color="blue"
                    class="purple-input"
                    label="Email"
                    type="email"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    id="signup-password"
                    v-model="user.password"
                    color="blue"
                    class="purple-input"
                    label="Senha"
                    type="password"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="8"
                >
                  <v-text-field
                    id="signup-nome"
                    v-model="user.attributes.name"
                    color="blue"
                    class="purple-input"
                    label="Nome Completo"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    id="signup-telefone"
                    v-model="user.attributes.phone_number"
                    color="blue"
                    class="purple-input"
                    label="Telefone"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="8"
                >
                  <v-text-field
                    id="signup-endereco"
                    v-model="user.attributes.address"
                    color="blue"
                    class="purple-input"
                    label="Endereço"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    id="signup-tipoUsuario"
                    v-model="user.attributes['custom:type']"
                    color="blue"
                    class="purple-input"
                    label="Tipo de Usuário"
                  />
                </v-col>

                <v-col
                  cols="12"
                  class="text-center"
                >
                  <v-btn
                    id="btn-signup"
                    v-on:click="cadastrar"
                    color="blue"
                    class="mr-0"
                  >
                    Realizar Cadastro
                  </v-btn>
                </v-col>

              </v-row>
            </v-container>
          </v-form>

              <v-form
                v-if="!toggleCadastrar"
                class="formcontainer"
                id="signup-auth">
                <v-container class="py-0">
                  <v-row>

                    <v-col
                      class="text-center"
                      cols="12"
                      md="8"
                      id="signup-auth-col"
                    >
                      <v-text-field
                        id="signup-authCode"
                        v-model="authCode"
                        color="blue"
                        class="purple-input"
                        label="Código de Confirmação"
                      />
                    </v-col>

                    <v-col
                      cols="12"
                      class="text-center"
                    >
                      <v-btn
                        id="btn-signupConfirm"
                        v-on:click="confirmarCadastro"
                        color="blue"
                        class="mr-0"
                      >
                        Confirmar Cadastro
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
/* eslint-disable no-alert */
import { Auth } from 'aws-amplify';

export default {
  name: 'Signup',
  props: ['toggle'],
  data() {
    return {
      toggleCadastrar: true,
      user: {
        username: '',
        password: '',
        attributes: {
          name: '',
          address: '',
          phone_number: '',
          'custom:type': '',
        },
      },
      authCode: '',
    };
  },
  methods: {
    async cadastrar() {
      const customUser = {
        ...this.user,
        attributes: { ...this.user.attributes, phone_number: `+55${this.user.attributes.phone_number}` },
      };
      try {
        await Auth.signUp(customUser);
        this.toggleCadastrar = false;
      } catch (error) {
        console.log(error);
        console.log('Erro ao realizar cadastro');
      }
    },
    async confirmarCadastro() {
      try {
        await Auth.confirmSignUp(this.user.username, this.authCode);
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

#signup-auth-col{
  padding-left: 158px;
}

</style>
