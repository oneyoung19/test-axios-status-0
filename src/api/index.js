import axios from 'axios'

export default {
  getHome () {
    return axios.post('/api/home', {}, {
      headers: {
        token: 'sasasadadadad'
      }
    })
  },
  getAbout () {
    return axios.post('/api/about', {}, {
      headers: {
        token: 'sasasadadadad'
      }
    })
  }
}
