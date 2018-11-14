<template>
  <div>
    tel:1343242348729789
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'tel',
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    /**
     * $on 给当前事件，绑定一个事件监听
     * 
     */
    this.$bus.$on('on-click', msg => {
      this.message = msg
    })
  }
}
</script>

<style scoped>
</style>
