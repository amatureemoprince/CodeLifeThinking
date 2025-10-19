<template>
  <div class="home-section">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String
  }
}
</script>

<style scoped>
.home-section {
  padding: 2rem;
  text-align: center;
}
</style>
