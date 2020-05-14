<template>
  <div>
    <p>First Name: {{ student.FirstName }}</p>
    <p>Last Name: {{ student.LastName }}</p>
    <p>Enrollment Date: {{ student.EnrollmentDate }}</p>
  </div>
</template>

<script>
export default {
  props: {
    student: {
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
