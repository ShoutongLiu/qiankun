<template>
  <div class="about">
    <div class="nav">
      <div @click="handleClick('/vue')">home</div>
      <div @click="handleClick('/vue/aboutme')">关于</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
  methods: {
    handleClick(path) {
      history.pushState({}, null, path)
    },
  },
}
</script>

