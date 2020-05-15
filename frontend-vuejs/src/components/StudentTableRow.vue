<template>
  <tr class="student-row">
    <td>{{ student.FirstName }}</td>
    <td>{{ student.LastName }}</td>
    <td>{{ student.EnrollmentDate }}</td>
    <td>
      <button class="btn btn-primary" @click="showStudent">
        Show
      </button>
    </td>

    <td>
      <button class="btn btn-warning" @click="deleteStudent">
        Delete
      </button>
    </td>
  </tr>
</template>

<script>
import APIResponseStatusCodes from '@/constants/APIResponseStatusCodes.js'
import StudentAPIServices from '@/services/StudentAPIServices.js'

export default {
  props: {
    student: {
      required: true
    }
  },

  methods: {
    showStudent() {
      this.$router.push({
        name: 'student-show',
        params: { id: this.student.StudentID, student: this.student }
      })
    },

    async deleteStudent() {
      let response = await StudentAPIServices.deleteStudent(
        this.student.StudentID
      )

      if (response.data.status === APIResponseStatusCodes.SUCCESS) {
        this.$emit('api-delete-success', this.student.StudentID)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
