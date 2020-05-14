<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <StudentTableHeader @add-student="goToCreateStudentPage" />
      </div>
      <div class="row">
        <StudentTable :students="students" />
      </div>
    </div>
  </div>
</template>

<script>
import StudentTable from '@/components/StudentTable.vue'
import StudentTableHeader from '@/components/StudentTableHeader.vue'
import StudentAPIServices from '@/services/StudentAPIServices.js'
import APIResponseStatusCodes from '@/constants/APIResponseStatusCodes.js'

export default {
  components: {
    StudentTable,
    StudentTableHeader
  },

  data() {
    return {
      students: []
    }
  },

  methods: {
    goToCreateStudentPage() {
      this.$router.push({
        name: 'student-create'
      })
    }
  },

  created() {
    StudentAPIServices.getStudents()
      .then(response => {
        if (response.data.status === APIResponseStatusCodes.SUCCESS) {
          this.students = response.data.result
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.home {
  padding-top: 30px;
}
</style>
