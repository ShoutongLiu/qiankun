<template>
  <div class="home">
    <div class="nav">
      <div @click="handleClick('/vue/home')">home</div>
      <div @click="handleClick('/vue/aboutme')">关于</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    handleClick(path) {
      history.pushState({}, null, path)
    },
  },
}
</script>
