<template>
    <div>
        <p>兄弟接收数据{{brotherValue}}</p>
    </div>
</template>

<script>
export default {
    props: {
        brotherValue: {
            type: [String, Number],
            default: ''
        }
    },
    name: 'Jsecond'
}
</script>

<style scoped>
</style>