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
                v-model="FirstName"
                type="test"
                class="form-control"
                id="first-name"
              />
            </div>

            <div class="form-group">
              <label for="last-name">Last Name</label>
              <input
                v-model="LastName"
                type="test"
                class="form-control"
                id="last-name"
              />
            </div>

            <div class="form-group">
              <label for="enrollment-date">Enrollment Date</label>
              <input
                v-model="EnrollmentDate"
                type="date"
                class="form-control"
                id="enrollment-date"
              />
            </div>

            <div class="container">
              <div class="row">
                <div class="col">
                  <button class="btn btn-primary" @click.prevent="addStudent">
                    Submit
                  </button>
                </div>
                <div class="col">
                  <button class="btn btn-primary" @click="cancelAddStudent">
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
import StudentAPIServices from '@/services/StudentAPIServices.js'
import APIResponseStatusCodes from '@/constants/APIResponseStatusCodes.js'
import StudentFormErrorMessage from '@/components/StudentFormErrorMessage.vue'

export default {
  components: {
    StudentFormErrorMessage
  },

  props: {
    student: Object
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
    async addStudent() {
      this.errors = []

      if (this.FirstName === '' || this.FirstName === null) {
        this.errors.push('First name is required')
      }

      if (this.LastName === '' || this.LastName === null) {
        this.errors.push('Last name is required')
      }

      if (this.EnrollmentDate === '' || this.EnrollmentDate === null) {
        this.errors.push('Enrollment date is required')
      }

      if (!this.errors.length) {
        let student = {
          FirstName: this.FirstName,
          LastName: this.LastName,
          EnrollmentDate: this.EnrollmentDate
        }

        let response = await StudentAPIServices.createStudent(student)

        if (response.data.status === APIResponseStatusCodes.SUCCESS) {
          this.$emit('api-create-success')
        }
      }
    },

    cancelAddStudent() {
      this.$emit('cancel-add-student')
    }
  }
}
</script>

<style lang="scss" scoped></style>
