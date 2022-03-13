<template>
  <div id="history" class="animate__animated animate__fadeInRight">
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities2"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :timestamp="activity.timestamp"
      >
        {{ activity.content }}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: "hisroty",
  created() {
    var act1 = [];
    this.apis.myinfo
      .getHistory(sessionStorage.getItem("username"))
      .then((res) => {
        if (res.data.status === 200) {
          act1 = res.data.result;
          // 要传给真正的数组
          var activities2 = [];
          // console.log(act);
          for (let i = 0; i < act1.length; i++) {
            // 真正数组中的每个对象
            var activity = {};
            // 基本信息初始化
            activity.content = act1[i].content;
            activity.timestamp = act1[i].id.ldate;
            activity.size = "large";
            activity.type = "primary";

            // 分辨类型
            let matchContent = act1[i].content;
            if (matchContent.match("登录")) {
              activity.icon = "fas fa-sign-in";
              activity.color = "#27ae60";
            } else if (matchContent.match("斩掉")) {
              activity.icon = "fad fa-eraser";
              activity.color = "#ff7675";
            } else if (matchContent.match("修改")) {
              activity.icon = "fas fa-edit";
              activity.color = "#0984e3";
            } else if (matchContent.match("参加")) {
              activity.icon = "fas fa-book-open";
              activity.color = "#ffb142";
            } else if (matchContent.match("查看")) {
              activity.icon = "fas fa-search";
              activity.color = "#576574";
            }
            activities2.unshift(activity);
          }
          this.activities2 = activities2;
        }
      });
  },
  data() {
    return {
      // 模拟从后台拿到的数据
      // activities1: [{
      //   content: '登录',
      //   timestamp: '2018-04-12 20:46',
      // }, {
      //   content: '参加考试+考试场次名',
      //   timestamp: '2018-04-03 20:46',
      // }, {
      //   content: '修改个人信息',
      //   timestamp: '2018-04-03 20:46',
      // }, {
      //   content: '删除错题+错题名',
      //   timestamp: '2018-04-03 20:46',
      // },
      // {
      //   content: '查看试卷+试卷名称',
      //   timestamp: '2018-04-03 20:46',
      // }
      // ],
      // 真正渲染的数据
      activities2: [],
    };
  },
};
</script>


<style scoped>
#history {
  box-sizing: border-box;
  margin-top: 35px;
  width: 100%;
  height: calc(100% - 35px);
  overflow-y: auto;
}
#history::-webkit-scrollbar {
  width: 0px;
}
</style>