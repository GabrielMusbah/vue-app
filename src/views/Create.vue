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
                <h2 class="text-center">Cadastro de aluno</h2>
              </div>

              <div>
                <ReturnInput />
              </div>

              <div class="mb-4">
                <StudentForm :type="'post'" />
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