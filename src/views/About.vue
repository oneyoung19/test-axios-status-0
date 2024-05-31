<template>
  <div class="about">
    <h1>Hi, {{ message }}</h1>
    {{ res }}
  </div>
</template>

<script>
import api from '@/api'
import creditApi from '@/api/credit'

export default {
  name: 'About',
  components: {
  },
  data () {
    return {
      message: '',
      res: null
    }
  },
  created () {
    this.getAbout()
    this.getTradeList()
  },
  methods: {
    getAbout () {
      return api.getAbout().then(res => {
        const { data: { message } } = res
        this.message = message
      }).catch(err => {
        console.error(err)
      })
    },
    getTradeList () {
      return creditApi.getTradeList().then(res => {
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
