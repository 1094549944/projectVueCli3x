<template>
  <div>
    <p> 我是store 文件</p>
    <!-- <JComponent v-model="value" @childInput="getValue" > </JComponent> -->
    <JComponent v-model="value" @childInput="handleInput"> </JComponent>
    <p>接收到的子组件值：{{value}}</p>
    <p>兄弟组件</p>
    <Jsecond :brotherValue="value"></Jsecond>
  </div>
</template>

<script>
import JComponent from '_c/Jcomponent'
import Jsecond from '_c/Jsecond'
export default {
  name: 'store',
  components: {
    JComponent,
    Jsecond
  },
  data () {
    return {
      value: '12',
      data: {
        name: "zhagnsan", age: 12
      }
    }
  },
  methods: {
    getValue (value) {
      this.value = value
    },
    handleInput (value) {
      this.value = value
    }
  }
}
</script>
<style scoped>
</style>