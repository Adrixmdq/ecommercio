<template>
  <div >
      <strong>Nombre:</strong> {{ nombre}} <br />
      <strong>Correo:</strong> {{ correo}} <br />
      <strong>Teléfono:</strong> {{ Telefono}} <br />
      <a :href="`https://${Sitio}`" target="_blank">
          {{nombre}} Página web
        </a>
     </div>
</template>

<script>
export default {
  name: 'TarjetaUsuario',
  props: {
    id: Number,
    nombre: String,
    correo: String,
    Telefono: String,
    Sitio: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
