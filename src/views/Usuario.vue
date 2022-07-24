<template>
  <div >
    <h1>Usuario</h1>
    <TarjetaUsuarioVue :id=this.id
                    :nombre=this.name
                    :correo=this.email
                    :Telefono=this.phone
                    :Sitio=this.website></TarjetaUsuarioVue>

    <ul id="informacion">
      <li v-for="info in infos" :key="info.id" >
        <strong>ID:</strong> {{ info.id }} <br />
        <strong>Título:</strong> {{ info.title }} <br />
        <strong>Cuerpo:</strong> {{ info.body }} <br />
        <hr />
      </li>
    </ul>
    <hr/>
 </div>
</template>

<script>
import TarjetaUsuarioVue from '@/components/TarjetaUsuario'
export default {
  props: ['id', 'name', 'email', 'phone', 'website'],
  name: 'Usuario',
  components: { TarjetaUsuarioVue },
  data () {
    return {
      infos: null
    }
  },
  mounted () {
    this.getPost()
  },
  methods: {
    async getPost () {
      this.$http
        .get(`https://jsonplaceholder.typicode.com/users/${this.id}/posts`)
        .then((response) => {
          this.infos = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
