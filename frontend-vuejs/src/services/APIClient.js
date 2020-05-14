import axios from 'axios'

const baseURL = 'http://localhost:8080'

const apiClient = axios.create({
  baseURL: `${baseURL}/api`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default apiClient
