<template>
    <v-form class="pa-4">
      <v-row class="d-flex justify-end">
        <v-col cols="12" sm="4"  class="d-flex justify-end align-center">
          <v-btn
            color="primary"
            @click="index"
            class="rounded-pill"
          >X</v-btn>
        </v-col>
      </v-row>
    </v-form>
</template>
  
<script>
  export default {
    methods: {
      index() {
        this.$router.push('/')
      }
    }
  }
</script>