<template>
  <div class="rdea-banner">
    <h1>Rdea Test</h1>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'RdeaBanner'
}
</script>

<style lang="scss" scoped>
.rdea-banner {
  display: block;
  position: fixed;
  background: pink;
  padding: 64px;
  left: 100px;
  top: 100px;
}
</style>
