<template>
  <div class="container ">
    <div class="row justify-content-start">
      <div class="col">
        <h3>List of Students</h3>
      </div>

      <div class="col">
        <button class="btn btn-primary" @click="addStudent">Add Student</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addStudent() {
      this.$emit('add-student')
    }
  }
}
</script>

<style lang="scss" scoped></style>
