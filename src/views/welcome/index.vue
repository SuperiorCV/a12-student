<template>
  <div id="welcome">
    <i class="fad fa-books"></i>
    <el-button></el-button>
  </div>
</template>

<script>
export default {
  name: "welcome",
  created() {
    this.apis.welcome.initData();
  },
};
</script>

<style scoped>
#welcome {
  width: 100%;
  height: 100vh;
  background: pink;
}
</style>