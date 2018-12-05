<template>
  <div>
    <p> 我是store 文件</p>
    <!-- <JComponent v-model="value" @childInput="getValue" > </JComponent> -->
    <JComponent
      v-model="value"
      @childInput="handleInput"
    > </JComponent>
    <p>接收到的子组件值：{{value}}</p>
    <p>兄弟组件</p>
    <Jsecond :brotherValue="value"></Jsecond>
    <div>显示store:{{appName}}</div>
    <div>显示module：{{userName}}</div>
    <div>截取最后的字母{{inputValueLastLetter}}</div>
    <div>getters======>{{ appNameWidthVersion }}</div>
    <div>传递过来的额属性{{firstLetter}}</div>
  </div>
</template>

<script>
import JComponent from '_c/Jcomponent'
import Jsecond from '_c/Jsecond'
import { mapState, mapGetters } from 'vuex'


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
  },
  computed: {
    ...mapState({
      userName: state => state.user.userName,
      appName: state => state.appName
    }),
    inputValueLastLetter () {
      return this.value.substr(-1, 1)
    },
    // appNameWidthVersion () {
    //   return this.$store.getters.appNameWidthVersion
    // }
    ...mapGetters({
      appNameWidthVersion: 'appNameWidthVersion'
    }),
    firstLetter () {
      return this.$store.user.getters.firstLetter
    }
  }

}
</script>
<style scoped>
</style>