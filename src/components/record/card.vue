<template>
  <div id="card" class="animate__animated animate__fadeInUp">
    <el-card shadow="hover">
      <div id="main_container">
        <div id="left" class="container">
          <span>智能训练试卷 - {{ record.id }}</span>
          <span>提交时间： {{ record.commit_time }}</span>
          <span>
            试卷状态：
            <el-tag
              v-if="record.paper_status == 'True'"
              type="success"
              size="small"
              >批改完成</el-tag
            >
            <el-tag v-else type="danger" size="small">待批改</el-tag>
          </span>
        </div>

        <div id="middle" class="container">
          <span>试卷类型：{{ record.type }}</span>
          <span>学科： {{ record.subject }}</span>
          <span>题目数量：{{ record.num }}</span>
          <span>试卷总分：{{ record.total }}</span>
          <span>发布时间：{{ record.release_time }}</span>
        </div>

        <div id="right" class="container">
          <span>正确题数：{{ record.right_num }}</span>
          <span>自动批改：{{ record.auto }}</span>
          <span>最终得分：{{ record.score }}</span>
          <span>耗时：{{ record.time }}</span>
        </div>

        <el-button type="text">查看试卷</el-button>
      </div>
    </el-card>
  </div>
</template>


<script>
export default {
  name: "card",
  props: {
    record: Object,
  },
  // data() {
  //   return {
  //     record: this.record,
  //   };
  // },

  methods: {},
};
</script>


<style scoped>
#card {
  margin-bottom: 20px;
  color: #4c596b;
}

#main_container {
  display: flex;
  flex-direction: row;
  height: 130px;
  width: 100%;
}

.container {
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
  font-size: 10px;
}

#left {
  width: 30%;
  justify-content: space-around;
}

#middle {
  width: 30%;
  justify-content: space-between;
}

#right {
  width: 20%;
  justify-content: space-between;
}
</style>