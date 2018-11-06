<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name:'home'}">Home</router-link> |
      <router-link :to="{name:'about'}">About</router-link>
    </div>
    <transition-group name="router">
      <router-view key="default" />
      <router-view key="tel"
                   name="tel" />
      <router-view key="email"
                   name="email" />
    </transition-group>
  </div>
</template>


<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px

  a
    font-weight bold
    color #2c3e50

    &.router-link-exact-active
      color #42b983

.router-enter
  opacity 0

.router-enter-active
  transition 1s opacity ease

.router-enter-to
  opacity 1

.router-leave
  opacity 1

.router-leave-active
  transition 1s opacity ease

.router-leave-to
  opacity 0
</style>
