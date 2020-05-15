<template>
  <div class="show-student">
    <StudentShowDetails
      v-if="!editStudent"
      :student="student"
    ></StudentShowDetails>

    <StudentEditForm
      @api-update-success="returnToStudentPage"
      @update-student-cancelled="returnToStudentPage"
      v-if="editStudent"
      :student="student"
    ></StudentEditForm>

    <button
      type="button"
      class="btn btn-primary"
      @click="showEditStudentForm"
      v-if="!editStudent"
    >
      Edit
    </button>
  </div>
</template>

<script>
import StudentShowDetails from '@/components/StudentShowDetails.vue'
import StudentEditForm from '@/components/StudentEditForm.vue'
import StudentAPIServices from '@/services/StudentAPIServices.js'

export default {
  components: {
    StudentShowDetails,
    StudentEditForm
  },

  props: {
    id: {
      required: true
    },
    student: Object
  },

  data() {
    return {
      editStudent: false
    }
  },

  methods: {
    showEditStudentForm() {
      this.editStudent = true
    },

    returnToStudentPage() {
      this.editStudent = false
    }
  },

  created() {
    if (this.student === undefined) {
      StudentAPIServices.getStudent(this.id)
        .then(response => {
          this.student = response.data.result
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>
