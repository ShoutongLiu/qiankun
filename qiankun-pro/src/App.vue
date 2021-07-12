<template>
  <div id="app">
    <nav>
      <div class="vue"
           @click="handleClick('/')">Home</div>
      <div class="vue"
           @click="handleClick('/vue/home')">Vue</div>
      <div class="react"
           @click="handleClick('/react/home')">React</div>
    </nav>
    <router-view />
    <div id="vueApp"></div>
    <div id="reactApp"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: 'first',
    }
  },
  methods: {
    handleClick(path) {
      history.pushState({}, null, path)
    },
  },
}
</script>

<style>
.nav {
  display: flex;
  align-items: center;
}

#app div {
  margin-right: 20px;
  cursor: pointer;
}
</style>
