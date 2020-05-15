<template>
  <div class="container">
    <div class="row justify-content-center">
      <h3>Error:</h3>
    </div>
    <div class="row justify-content-center">
      <ul>
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    errors: {
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
