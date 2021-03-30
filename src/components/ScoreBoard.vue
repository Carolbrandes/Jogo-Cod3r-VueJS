<template>
  <div class="score">
    <div v-if="this.$store.state.winner">
      {{this.$store.state.winner}}
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.score{
  font-size: 2rem;
  font-weight: bold;
}
</style>
