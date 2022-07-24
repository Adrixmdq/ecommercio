<template>
  <div >
    <h1>Listado de los usuarios</h1>
    <div class="container" background = "green" v-for="dato in datos" :key="dato.id">
         <strong>Nombre:</strong> {{ dato.name}} <br />
         <strong>Correo:</strong> {{ dato.email}} <br />
        <router-link  bg-dark bg-gradient :to="{ name: 'Usuario',  params: { id: dato.id }}"
           ><strong> Otros datos de {{ dato.name }}</strong></router-link >
           <br/>
           <hr/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Listado',
  components: { },
  data () {
    return {
      datos: []
    }
  },
  created () {
    this.getPost()
  },
  methods: {
    async getPost () {
      try {
        const { data } = await this.$http.get(
          'https://jsonplaceholder.typicode.com/users'
        )
        this.datos = data
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
