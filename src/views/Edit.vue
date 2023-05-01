<template>
  
  <v-app>

    <AppBar />

    <v-main>

      <v-container class="mt-12">

        <v-row>

          <v-col cols="12" md="2" class="border pa-0">
            <Menu />
          </v-col>

          <v-col cols="12" md="10" class="border pa-0">

            <div class="mb-4 bg-blue-grey-lighten-4">
              <h2 class="text-center">Editar aluno</h2>
            </div>

            <div v-if="!loading">

              <ReturnInput />

              <StudentForm :name="name" :email="email" :ra="ra" :cpf="cpf" :type="'put'"/>

            </div>

          </v-col>

        </v-row>

      </v-container>

    </v-main>

  </v-app>
  
</template>
  
<script setup>
  import AppBar from '@/components/NavBar.vue'
  import ReturnInput from '@/components/ReturnInput.vue'
  import StudentForm from '@/components/StudentForm.vue'
  import Menu from '@/components/Menu.vue'
</script>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        loading: true,
        name: '',
        email: '',
        ra: '',
        cpf: ''
      }
    },
    mounted() {
      axios.get(`http://127.0.0.1:8000/api/students/${this.$route.params.id}`).then((response) => {
        this.loading = false
        this.name = response.data.name
        this.email = response.data.email
        this.ra = response.data.ra
        this.cpf = response.data.cpf
      })
    },
  }
</script>