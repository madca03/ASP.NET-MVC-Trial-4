<template>
  <StudentAddForm
    @cancel-add-student="returnToIndexPage"
    @api-create-success="returnToIndexPage"
  ></StudentAddForm>
</template>

<script>
import StudentAddForm from '@/components/StudentAddForm.vue'

export default {
  components: {
    StudentAddForm
  },

  methods: {
    returnToIndexPage() {
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
