import axios from 'axios'

export default {
  getHome () {
    return axios.post('/api/home')
  },
  getAbout () {
    return axios.post('/api/about')
  }
}
