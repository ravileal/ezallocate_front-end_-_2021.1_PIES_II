<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <base-material-card color="success" hover-reveal type="Bar">
          <template v-slot:heading>
            <div class="text-h3 font-weight-light" id="text-edit-profile">Edite seu Perfil</div>

            <div class="text-subtitle-1 font-weight-light">Complete seu perfil preennchendo todos os campos abaixo</div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    id="edit-email"
                    :value="user.attributes.email"
                    v-model="user.attributes.email"
                    color="blue"
                    class="purple-input"
                    label="Email"
                    type="email"
                    disabled
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    id="edit-telefone"
                    :value="user.attributes.phone_number"
                    v-model="user.attributes.phone_number"
                    color="blue"
                    label="Telefone"
                    class="purple-input"
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    id="edit-nome"
                    :value="user.attributes.name"
                    v-model="user.attributes.name"
                    color="blue"
                    label="Nome Completo"
                    class="purple-input"
                    disabled
                  />
                </v-col>

                <br />

                <v-col cols="12" md="4">
                  <v-text-field
                    id="edit-endereco"
                    :value="user.attributes.address"
                    v-model="user.attributes.address"
                    color="blue"
                    label="Endereço"
                    class="purple-input"
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    id="edit-type-user"
                    :value="user.attributes['custom:type']"
                    v-model="user.attributes['custom:type']"
                    color="blue"
                    label="Tipo de Usuário"
                    class="purple-input"
                  />
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    id="edit-password"
                    color="blue"
                    class="purple-input"
                    label="Senha Atual"
                    v-model="password.old"
                    type="password"
                  />
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    id="edit-password2"
                    color="blue"
                    class="purple-input"
                    label="Nova senha"
                    v-model="password.new"
                    type="password"
                  />
                </v-col>

                <v-col cols="12" class="text-left">
                  <v-btn id="btn-editProfile" color="success" class="mr-0" v-on:click="updateUser()">
                    Atualizar dados
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
  data() {
    return {
      user: '',
      password: {
        old: '',
        new: '',
      },
    };
  },
  async beforeCreate() {
    this.user = await Auth.currentAuthenticatedUser();
    console.log(this.user);
  },
  methods: {
    async updateUser() {
      try {
        await Auth.updateUserAttributes(this.user, this.user.attributes);
        await this.changePassword();
        alert('Usuario atualizado');
      } catch (e) {
        alert('Erro ao atualizar usuario, verifique os dados');
        console.log(e);
      }
    },
    async changePassword() {
      try {
        if (this.password.new && this.password.old) {
          return Auth.changePassword(this.user, this.password.old, this.password.new);
        }
      } catch (e) {
        alert('Erro ao atualizar senha, verifique os dados');
        console.log(e);
      }
    },
  },
};
</script>
