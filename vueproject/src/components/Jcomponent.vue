<template>
  <div>
    <p>显示我是JComponent</p>
    <input type="text" :value="value" @input="pushInput">
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: '0'
    }
  },
  name: 'Jcomponent',
  methods: {
    pushInput (e) {
      const value = e.target.value
      this.$emit('childInput', value)
    },
  },
}
</script>
