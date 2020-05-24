<template>
  <div class="show-student">
    <component
      v-if="student"
      :is="activeComponent"
      :student="student"
      @api-update-success="returnToStudentPage"
      @update-student-cancelled="returnToStudentPage"
    />

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
    passedStudent: Object
  },

  data() {
    return {
      retrievedStudent: null,
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

  computed: {
    student() {
      return this.passedStudent || this.retrievedStudent
    },
    activeComponent() {
      return this.editStudent ? StudentEditForm : StudentShowDetails
    }
  },

  created() {
    if (this.passedStudent === undefined) {
      StudentAPIServices.getStudent(this.id)
        .then(response => {
          this.retrievedStudent = response.data.result
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>
