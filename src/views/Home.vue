<template>
  <div class="home">
    <h1>Hi, {{ message }}</h1>
  </div>
</template>

<script>
import api from '@/api'

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      message: ''
    }
  },
  created () {
    api.getHome().then(res => {
      const { data: { message } } = res
      this.message = message
    }).catch(err => {
      console.error(err)
    })
  }
}
</script>
