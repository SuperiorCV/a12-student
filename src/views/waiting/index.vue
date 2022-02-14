<template>
  <div id="waiting">
    <div id="head">
      <div class="main">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ name: 'exam' }"
            >我的考试</el-breadcrumb-item
          >
          <el-breadcrumb-item>{{ exam.title }}等候厅</el-breadcrumb-item>
        </el-breadcrumb>
        <h2>
          {{ exam.title }}<span class="match-status $statusSmCls">进行中</span>
        </h2>
        <p class="item">
          考试时间范围：{{ exam.startTime }} 至 {{ exam.endTime }}
        </p>
        <p class="item">考试学科：{{ exam.subject }}</p>
        <p class="item">考试时长：{{ exam.duration }}</p>
      </div>
    </div>
    <!-- <flip-countdown deadline="2024-12-25 00:00"></flip-countdown> -->
    <div id="body">
      <div class="menu">
        <h2 class="red"><i class='fad fa-arrow-circle-left'></i> 离开等候室</h2>
      </div>
    </div>
  </div>
</template>


<script>
import FlipCountdown from "vue2-flip-countdown";
export default {
  name: "waiting",
  components: { FlipCountdown },
  data() {
    return {
      exam: {
        id: 0,
        title: "精英班选拔考试",
        startTime: "2022-02-12 09:30",
        endTime: "2022-02-21 09:30",
        subject: "高等数学(2A)",
        duration: "3h",
      },
    };
  },
};
</script>

<style scoped>
#waiting {
  width: 100%;
  min-height: 100vh;
  /* background: #000; */
  position: relative;
  background: #fff;
  box-shadow: 0px 1px 2px rgb(33 40 53 / 10%), 0px 2px 8px rgba(33 40 53 / 8%);
}
#body {
  width: 100%;
  min-height: 200px;
  /* background: pink; */
  display: flex;
  box-sizing: border-box;
  padding: 10px 20px;
}
.menu h2 {
  margin-right: 20px;
  width: 170px;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  font-family: "hytmr";
}
.red {
  background: rgba(204, 51, 51, 0.7);
  color: #fff;
  transition: 0.3s;
}
.red:hover {
  background: rgba(204, 51, 51, 0.5);
}
#head {
  width: 100%;
  height: 220px;
  background-image: url("../../../static/images/waiting/bg.png");
  background-color: rgb(7, 10, 15);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.main {
  width: 60%;
  height: 80%;
  /* background: pink; */
}
#head h2 {
  font-family: "SentyGoldenBell";
}
.match-status {
  font-family: "hytmr";
  position: relative;
  display: inline-block;
  vertical-align: middle;
  background: #cc3333;
  border-color: #cc3333;
  color: #fff;
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  margin: 0 5px;
  padding: 0 5px;
  text-align: center;
}
.match-status:after {
  border-style: solid;
  border-color: inherit;
  border-width: 10px 8px;
  position: absolute;
  content: "";
  bottom: 0;
  right: -10px;
  border-right-color: transparent;
}
.item {
  margin: 3px;
  font-size: 14px;
}
</style>