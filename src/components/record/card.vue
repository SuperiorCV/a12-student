<template>
  <div id="card" class="animate__animated animate__fadeInUp">
    <el-card shadow="hover">
      <div id="main_container">
        <div
          id="left"
          class="container"
        >
          <span>考试试卷 - {{ record.title }}</span>
          <span>提交时间： {{ record.commit_time }}</span>
          <span>
            试卷状态：
            <el-tag
              v-if="record.paper_status == 1 || record.paper_status == 2"
              type="success"
              size="small"
              >批改完成</el-tag
            >
            <el-tag
              v-else
              type="danger"
              size="small"
              >待批改</el-tag
            >
          </span>
        </div>

        <div id="middle" class="container">
          <span>学科： {{ record.subject }}</span>
          <span>题目数量：{{ record.num }}</span>
          <span>试卷总分：{{ record.total }}</span>
        </div>

        <el-button
          type="text"
          v-if="record.paper_status == 1 || record.paper_status == 2"
          @click="result"
          >查看试卷</el-button
        >
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

  methods: {
    result() {
      this.$router.push({ name: "result", params: { exam: this.record } });
    },
  },
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
  width: 50%;
  justify-content: space-around;
}
</style>