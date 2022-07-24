<template>
  <div >
    <h1>Usuario</h1>
    <TarjetaUsuarioVue :id="usuario.id"
                       :nombre="usuario.name"
                       :correo="usuario.email"
                       :Telefono="usuario.phone"
                       :Sitio="usuario.website"></TarjetaUsuarioVue>
 </div>
</template>

<script>
import TarjetaUsuarioVue from '../components/TarjetaUsuario.vue'
export default {
  props: ['id'],
  name: 'Usuario',
  components: { TarjetaUsuarioVue },
  data () {
    return {
      usuario: null
    }
  },
  mounted () {
    this.getPost()
  },
  methods: {
    async getPost () {
      try {
        const { data } = await this.$http.get(
          `https://jsonplaceholder.typicode.com/users/${this.id}`
        )
        this.usuario = data
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
