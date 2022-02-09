<template>
  <div id="welcome" class="container animate__animated animate__fadeIn">
    <div class="container animate__animated animate__zoomIn">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "welcome",
};
</script>

<style scoped>
#welcome {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f4f7;
  position: relative;
}
#welcome::before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: "";
  background: url("../../../static/images/welcome/bg1.png") no-repeat left
    bottom;
}
#welcome::after {
  position: absolute;
  width: 100%;
  height: 100%;
  content: "";
  background: url("../../../static/images/welcome/bg2.png") no-repeat right
    bottom;
}
/* 容器的样式 */
.container {
  margin: auto;
  width: 950px;
  height: 550px;
  position: relative;
  z-index: 5;
}
</style>