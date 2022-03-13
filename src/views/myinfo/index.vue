<template>
  <div id="myinfo" ref="myinfo">
    <div class="container">
      <div id="menu">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="我的空间" name="me"></el-tab-pane>
          <el-tab-pane label="信息修改" name="editinfo"></el-tab-pane>
          <!-- <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth"
            >定时任务补偿</el-tab-pane
          > -->
        </el-tabs>
      </div>
      <div id="wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "myinfo",
  data() {
    return {
      activeName: "me",
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(`mememem`);
      this.activeName = tab.name;
      this.$router.push({ name: tab.name });
    },
  },
};
</script>


<style scoped>
#myinfo {
  width: 100%;
  min-height: 90vh;
}
.container {
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  margin-top: 10px;
  min-height: 80vh;
  /* background: #fff; */
  border-top-left-radius: 8px;
  /* box-shadow: 0px 1px 2px rgb(33 40 53 / 10%), 0px 2px 8px rgb(33 40 53 / 8%); */
}
#wrapper {
  width: 100%;
}
</style>