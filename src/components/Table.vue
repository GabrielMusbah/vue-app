<template>

  <v-row class="d-flex justify-center align-center">
    <v-col cols="12" sm="4">

      <v-text-field 
        v-model="search"
        label="Pesquisar"
        prepend-inner-icon="mdi-magnify"
      />

    </v-col>
  </v-row>

  <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="desserts"
    item-value="name"
    :search="search"
    class="elevation-1"
  >

    <template v-slot:item.action="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon small @click="deleteItem(item)">
        mdi-delete
      </v-icon>
    </template>

  </v-data-table>

</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        search: '',
        itemsPerPage: 5,
        headers: [
          {
            title: 'Registro Academico',
            align: 'start',
            sortable: true,
            key: 'ra',
          },
          { title: 'Nome', align: 'end', key: 'name' },
          { title: 'CPF', align: 'end', key: 'cpf' },
          { title: 'Ações', align: 'end', key: 'action', sortable: false },
        ],
        desserts: [],
      }
    },
    computed: {
      dessertsFromApi() {
        return this.desserts
      },
    },
    mounted() {
      axios.get('http://127.0.0.1:8000/api/students').then((response) => {
        this.desserts = response.data
      })
    },
    methods: {
      editItem(item) {
        this.$router.push(`/editar/${item.raw.id}`)
      },
      async deleteItem(item) {
        await axios.delete(`http://127.0.0.1:8000/api/students/${item.raw.id}`)

        const index = this.desserts.indexOf(item.raw)
        
        if (index !== -1) {
          this.desserts.splice(index, 1)
        }
      },
    },
  }
</script> 