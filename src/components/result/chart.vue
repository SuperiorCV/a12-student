<template>
  <div id="chart">
    <div class="header">
      <h3>考试结果分析</h3>
    </div>
    <div class="main"></div>
  </div>
</template>

<script>
export default {
  name: "chart",
};
</script>

<style scoped>
#chart {
  width: 100%;
  height: 500px;
  box-sizing: border-box;
}
.header {
  display: flex;
  align-items: center;
  height: 64px;
  box-sizing: border-box;
  padding: 10px;
  background: #fafafa;
  border-top: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
}
.main {
  height: 100%;
  width: 100%;
  background: pink;
}
</style>