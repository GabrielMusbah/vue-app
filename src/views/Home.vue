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
              <h2 class="text-center">Consulta de alunos</h2>
            </div>

            <div>
              <CreateInput />
            </div>

            <div>
              <Table />
            </div>

          </v-col>

        </v-row>

      </v-container>

    </v-main>

  </v-app>

</template>

<script setup>
  import AppBar from '@/components/NavBar.vue'
  import CreateInput from '@/components/CreateInput.vue'
  import Table from '@/components/Table.vue'
  import Menu from '@/components/Menu.vue'
</script>