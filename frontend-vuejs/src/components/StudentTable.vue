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
      const parsedID = parseInt(StudentID)
      const idx = this.students.findIndex(
        x => parseInt(x.StudentID) === parsedID
      )
      if (idx > 0) {
        this.students.splice(idx, 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
