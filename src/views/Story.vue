<template>
  <div>
    <p>Story</p>
    <button @click="handleClick">Click</button>
    <div>
      <span>{{ count }}</span><button @click="handleAddCount">Add Count</button>
      <span>{{ copyCount }}</span><button @click="handleAddCopyCount">Add Copy Count</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['count', 'copyCount'])
  },
  methods: {
    ...mapMutations(['SET_COUNT', 'SET_COPY_COUNT']),
    handleClick () {
      import('./test1.js').then(value => {
        console.log(value)
      })
    },
    handleAddCount () {
      this.SET_COUNT()
    },
    handleAddCopyCount () {
      this.SET_COPY_COUNT()
    }
  }
}
</script>

<style scoped lang="less">
</style>
