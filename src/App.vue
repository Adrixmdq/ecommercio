<template>
  <div id="nav">
    <Cabecera />
    <router-view />
    <Pie />
  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue'
import Pie from './components/Pie.vue'

export default {
  components: {
    Cabecera,
    Pie
  }
}
</script>
