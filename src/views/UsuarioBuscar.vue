<template>
  <form @submit.prevent="buscar">
    <div >
        Número de usuario a buscar :
      <input
        type="text"
        v-model="id"
      />
      <router-link  bg-dark bg-gradient :to="{ name: 'Usuario',  params: { id: id }}"
     ><strong> buscar usuario </strong></router-link >
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      id: 0
    }
  }
}
</script>
