<template>
  <div class="home">
    <h1>Hi, {{ message }}</h1>
    {{ res }}
  </div>
</template>

<script>
import api from '@/api'
import creditApi from '@/api/credit'

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      message: '',
      res: null
    }
  },
  created () {
    this.getHome()
    this.getHomepage()
  },
  methods: {
    getHome () {
      return api.getHome().then(res => {
        const { data: { message } } = res
        this.message = message
      }).catch(err => {
        console.error(err)
      })
    },
    getHomepage () {
      return creditApi.getHomepage().then(res => {
        const { data } = res
        this.res = data
      }).catch(err => {
        console.error(err)
        alert(err)
      })
    }
  }
}
</script>
