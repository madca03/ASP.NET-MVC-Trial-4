import APIClient from './APIClient.js'

const baseURL = '/students'

export default {
  getStudents() {
    return APIClient.get(baseURL)
  },

  getStudent(id) {
    return APIClient.get(`${baseURL}/${id}`)
  },

  createStudent(student) {
    return APIClient.post(baseURL, {
      FirstName: student.FirstName,
      LastName: student.LastName,
      EnrollmentDate: student.EnrollmentDate
    })
  },

  updateStudent(student) {
    return APIClient.put(`${baseURL}/${student.StudentID}`, {
      FirstName: student.FirstName,
      LastName: student.LastName,
      EnrollmentDate: student.EnrollmentDate
    })
  },

  deleteStudent(id) {
    return APIClient.delete(`${baseURL}/${id}`)
  }
}
