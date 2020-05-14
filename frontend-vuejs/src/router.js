import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ShowStudent from './views/students/ShowStudent.vue'
import CreateStudent from './views/students/CreateStudent.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/students/:id(\\d+)',
      name: 'student-show',
      component: ShowStudent,
      props: true
    },
    {
      path: '/students/create',
      name: 'student-create',
      component: CreateStudent
    }
  ]
})
