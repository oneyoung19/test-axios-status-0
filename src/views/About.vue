<template>
  <div class="about">
    <h1>Hi, {{ message }}</h1>
  </div>
</template>

<script>
import api from '@/api'

export default {
  name: 'About',
  components: {
  },
  data () {
    return {
      message: ''
    }
  },
  created () {
    api.getAbout().then(res => {
      const { data: { message } } = res
      this.message = message
    }).catch(err => {
      console.error(err)
    })
  }
}
</script>
