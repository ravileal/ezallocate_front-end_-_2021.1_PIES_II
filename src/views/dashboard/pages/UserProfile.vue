<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <base-material-card
          color="blue"
          hover-reveal
          type="Bar"
        >
          <template v-slot:heading>
            <div class="text-h3 font-weight-light">
              Edite seu Perfil
            </div>

            <div class="text-subtitle-1 font-weight-light">
              Complete seu perfil preennchendo todos os campos abaixo
            </div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>

                <v-col id="edit-email"
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    color="blue"
                    class="purple-input"
                    label="Email"
                    type="email"
                  />
                </v-col>

                <v-col id="edit-telefone"
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    color="blue"
                    label="Telefone"
                    class="purple-input"
                  />
                </v-col>

                <v-col id="edit-nome"
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    color="blue"
                    label="Nome Completo"
                    class="purple-input"
                  />
                </v-col>

                <br/>

                <v-col id="edit-endereco"
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    color="blue"
                    label="Endereço"
                    class="purple-input"
                  />
                </v-col>

                <v-col id="edit-type-user"
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    color="blue"
                    label="Tipo de Usuário"
                    class="purple-input"
                  />
                </v-col>

                <v-col id="edit-password"
                  cols="12"
                  md="3"
                >
                  <v-text-field
                    color="blue"
                    class="purple-input"
                    label="Senha"
                    type="password"
                  />
                </v-col>

                <v-col id="edit-password2"
                  cols="12"
                  md="3"
                >
                  <v-text-field
                    color="blue"
                    class="purple-input"
                    label="Confirme sua senha"
                    type="password"
                  />
                </v-col>

                <v-col
                  cols="12"
                  class="text-left"
                >
                  <v-btn
                    color="blue"
                    class="mr-0"
                  >
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
export default {
  //
};
</script>
