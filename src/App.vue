<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    var tip=this.apis.welcome.initData()
    console.log(tip)
  }
}
</script>

<style>
</style>
