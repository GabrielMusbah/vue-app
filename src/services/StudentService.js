import UserService from '@/services/UserService';

export default {
  data() {
    return {
      students: null
    };
  },

  methods: {
    obterUsuario(id) {
      UserService.getUser(id)
        .then(response => {
          this.students = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
