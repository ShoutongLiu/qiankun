<template>
  <div class="home">
    <h1>子应用</h1>
    <img alt="Vue logo"
         src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
}
</script>
