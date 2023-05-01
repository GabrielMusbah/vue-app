<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent>

      <v-text-field
        v-model="Name"
        :rules="nameRules"
        label="Nome"
        :value="Name"
        persistent-hint
      ></v-text-field>

      <v-text-field
        v-model="Email"
        :rules="emailRules"
        label="E-mail"
        :value="Email"
        persistent-hint
      ></v-text-field>

      <v-text-field
        v-model="Ra"
        :rules="raRules"
        label="Registro Academico"
        :value="ra"
        persistent-hint
      ></v-text-field>

      <v-text-field
        v-model="Cpf"
        :rules="cpfRules"
        label="CPF"
        :value="Cpf"
        persistent-hint
      ></v-text-field>

      <v-btn @click="handleSubmit" block class="mt-2">Enviar</v-btn>

    </v-form>
  </v-sheet>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        Name: this.name ?? '',
        nameRules: [
          value => {
            if (value?.length > 3) return true

            return 'O nome deve ter no minimo 3 caracteres.'
          },
        ],
        Email: this.email ?? '',
        emailRules: [
          value => {
            if (value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return true

            return 'Por favor, insira um email válido.'
          },
        ],
        Ra: this.ra ?? '',
        raRules: [
          value => {
            if (value && isNaN(value)) {
              return 'O registro acadêmico deve conter apenas números';
            }
            if (value?.length < 7) {
              return 'O registro acadêmico deve ter no mínimo 7 caracteres';
            }
            return true;
          }
        ],
        Cpf: this.cpf ?? '',
        cpfRules: [
          value => {
            if (!value) {
              return 'Por favor, insira um CPF válido';
            }

            const cpfRegex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
            
            if (!cpfRegex.test(value)) {
              return 'Por favor, insira um CPF válido';
            }
            return true;
          }
        ],
      }
    },
    methods: {
      async handleSubmit() {
        let data = {
          'name': this.Name,
          'email': this.Email,
          'ra': this.Ra,
          'cpf': this.Cpf
        };

        if (this.type === 'post') {
          try {
            const response = await axios.post('http://127.0.0.1:8000/api/students', data);
              this.$router.push('/')
          } catch (error) {
            console.error(error);
          }
        }

        if (this.type === 'put') {
          try {
            const response = await axios.put(`http://127.0.0.1:8000/api/students/${this.$route.params.id}`, data);
              this.$router.push('/')
          } catch (error) {
            console.error(error);
          }
        }

      }
    },
    props: {
      name: String,
      email: String,
      ra: String,
      cpf: String,
      type: String
    }
  }
</script>
