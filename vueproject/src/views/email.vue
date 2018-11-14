<template>
  <div>
    email:test@qq.com
    <button @click="handleClick">点击事件</button>
  </div>
</template>

<script>
export default {
  name: 'email',
  mounted () {
    console.log(this.$bus)
  },
  methods: {
    handleClick () {
      /**
       * $emit : 能触发当前实例上的一些事件
       */
      this.$bus.$emit('on-click', '传递到兄弟组件中')
    },
  },
}
</script>

<style scoped>
</style>
