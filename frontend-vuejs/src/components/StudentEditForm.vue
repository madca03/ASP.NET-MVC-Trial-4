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
                v-model="FirstName"
              />
            </div>

            <div class="form-group">
              <label for="last-name">Last Name</label>
              <input
                type="test"
                class="form-control"
                id="last-name"
                v-model="LastName"
              />
            </div>

            <div class="form-group">
              <label for="enrollment-date">Enrollment Date</label>
              <input
                type="date"
                class="form-control"
                id="enrollment-date"
                v-model="EnrollmentDate"
              />
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
      FirstName: null,
      LastName: null,
      EnrollmentDate: null,
      errors: []
    }
  },

  methods: {
    async updateStudent() {
      this.errors = []

      if (
        this.FirstName === '' ||
        this.FirstName === undefined ||
        this.FirstName === null
      ) {
        this.errors.push('First name is required')
      }

      if (
        this.LastName === '' ||
        this.LastName === undefined ||
        this.LastName === null
      ) {
        this.errors.push('Last name is required')
      }

      if (
        this.EnrollmentDate === '' ||
        this.EnrollmentDate === undefined ||
        this.EnrollmentDate === null
      ) {
        this.errors.push('Enrollment date is required')
      }

      if (!this.errors.length) {
        let student = {
          FirstName: this.FirstName,
          LastName: this.LastName,
          EnrollmentDate: this.EnrollmentDate,
          StudentID: this.student.StudentID
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
  },

  created() {
    this.FirstName = this.student.FirstName
    this.LastName = this.student.LastName
    const tempDate = this.student.EnrollmentDate.split(' ')[0].split('/')
    this.EnrollmentDate = `${tempDate[2]}-${tempDate[0]}-${tempDate[1]}`
  }
}
</script>

<style lang="scss" scoped></style>
