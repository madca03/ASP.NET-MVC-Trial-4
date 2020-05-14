<template>
  <div>
    <StudentFormErrorMessage
      v-if="errors.length"
      :errors="errors"
    ></StudentFormErrorMessage>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-4">
          <form>
            <div class="form-group">
              <label for="first-name">First Name</label>
              <input
                type="test"
                class="form-control"
                id="first-name"
                :value="student.FirstName"
              />
            </div>

            <div class="form-group">
              <label for="last-name">Last Name</label>
              <input
                type="test"
                class="form-control"
                id="last-name"
                :value="student.LastName"
              />
            </div>

            <div class="form-group">
              <label for="enrollment-date">Enrollment Date</label>
              <input type="date" class="form-control" id="enrollment-date" />
            </div>

            <div class="container">
              <div class="row">
                <div class="col">
                  <button
                    class="btn btn-primary"
                    @click.prevent="updateStudent"
                  >
                    Submit
                  </button>
                </div>
                <div class="col">
                  <button
                    class="btn btn-primary"
                    @click.prevent="cancelUpdateStudentForm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StudentFormErrorMessage from '@/components/StudentFormErrorMessage.vue'
import StudentAPIServices from '@/services/StudentAPIServices.js'
import APIResponseStatusCodes from '@/constants/APIResponseStatusCodes.js'

export default {
  components: {
    StudentFormErrorMessage
  },

  props: {
    student: {
      required: true
    }
  },

  data() {
    return {
      errors: []
    }
  },

  methods: {
    async updateStudent() {
      this.errors = []

      let StudentID = this.student.StudentID
      let FirstName = document.getElementById('first-name').value
      let LastName = document.getElementById('last-name').value
      let EnrollmentDate = document.getElementById('enrollment-date').value

      if (FirstName === '' || FirstName === undefined || FirstName === null) {
        this.errors.push('First name is required')
      }

      if (LastName === '' || LastName === undefined || LastName === null) {
        this.errors.push('Last name is required')
      }

      if (
        EnrollmentDate === '' ||
        EnrollmentDate === undefined ||
        EnrollmentDate === null
      ) {
        this.errors.push('Enrollment date is required')
      }

      if (!this.errors.length) {
        let student = {
          FirstName,
          LastName,
          EnrollmentDate,
          StudentID
        }

        let response = await StudentAPIServices.updateStudent(student)

        if (response.data.status === APIResponseStatusCodes.SUCCESS) {
          if (this.student.FirstName !== student.FirstName)
            this.student.FirstName = student.FirstName

          if (this.student.LastName !== student.LastName)
            this.student.LastName = student.LastName

          if (this.student.EnrollmentDate !== student.EnrollmentDate)
            this.student.EnrollmentDate = student.EnrollmentDate

          this.$emit('api-update-success')
        }
      }
    },

    cancelUpdateStudentForm() {
      this.$emit('update-student-cancelled')
    }
  }
}
</script>

<style lang="scss" scoped></style>
