import axios from 'axios'

const baseURL = 'http://localhost:3000'

const apiClient = axios.create({
  baseURL: `${baseURL}/api`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default apiClient
