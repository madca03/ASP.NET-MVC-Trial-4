<template>
  <table class="table table-hover">
    <thead>
      <StudentTableHead></StudentTableHead>
    </thead>
    <tbody>
      <StudentTableRow
        v-for="student in students"
        :key="student.StudentID"
        :student="student"
        @api-delete-success="deleteStudentRow"
      ></StudentTableRow>
    </tbody>
  </table>
</template>

<script>
import StudentTableHead from '@/components/StudentTableHead.vue'
import StudentTableRow from '@/components/StudentTableRow.vue'

export default {
  components: {
    StudentTableRow,
    StudentTableHead
  },

  props: {
    students: {
      type: Array,
      required: true
    }
  },

  methods: {
    deleteStudentRow(StudentID) {
      this.students.find((student, index, array) => {
        if (parseInt(student.StudentID) === parseInt(StudentID)) {
          array.splice(index, 1)
          return true
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
