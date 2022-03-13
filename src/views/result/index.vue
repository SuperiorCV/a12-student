<template>
  <div id="check">
    <div id="l-side" class="animate__animated animate__fadeInLeft">
      <h3>{{ exam.title }}</h3>
      <div class="info">
        <p>提交人：{{ exam.student }}</p>
        <p>提交时间：{{ exam.submitTime }}</p>
        <p>试卷得分：{{ currentScore }} / {{ fullScore }}分</p>
      </div>
      <div class="menu">
        <el-tag
          class="tag"
          :type="questionStatus(item.status, item.questionType)"
          v-for="(item, j) in tags"
          :key="j"
          @click="goAnchor(`#question-${item.id}`)"
          >{{ j + 1 }}</el-tag
        >
      </div>
      <div class="tool">
        <el-button type="primary" plain v-if="edit === true"
          >提交批改</el-button
        >
        <el-button plain @click="toList">返回列表</el-button>
      </div>
    </div>
    <div id="r-main">
      <chart :eid="eid"></chart>
      <div class="module" v-for="(mod, idx) in exam.modules" :key="idx">
        <div class="header">
          <h3>模块{{ idx + 1 }}：{{ mod.title }}</h3>
        </div>
        <div
          :id="`question-${question.id}`"
          class="card animate__animated animate__fadeInUp"
          v-for="(question, j) in mod.questionList"
          :key="j"
        >
          <AnswerShow
            :edit="edit"
            :idx="IndexCompute(idx, j)"
            :question="question"
            @updateExam="updateExam"
          ></AnswerShow>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import AnswerShow from "@/components/result/answerShow.vue";
import chart from "@/components/result/chart.vue";
export default {
  name: "check",
  components: {
    AnswerShow,
    chart,
  },
  created() {
    var params = this.$route.params;
    if (params != null) {
      this.eid = params.exam.eid;
      this.exam.submitTime = params.exam.commit_time;
      this.exam.student = sessionStorage.getItem("username");
    }
    this.apis.result
      .getAnswerPaper(sessionStorage.getItem("username"), this.eid)
      .then((res) => {
        console.log(res);
        var modules = res.data.result;
        this.exam.modules = modules;
      });
  },
  data() {
    return {
      eid: "",
      edit: false,
      exam: {
        total: 30,
        submitTime: "",
        student: "",
        title: "",
        modules: [],
      },
    };
  },
  computed: {
    fullScore() {
      var ans = 0;
      for (let i = 0; i < this.exam.modules.length; i++) {
        var questionList = this.exam.modules[i].questionList;
        for (let j = 0; j < questionList.length; j++) {
          var question = questionList[j];
          ans += question.score;
        }
      }
      return ans;
    },
    currentScore() {
      var ans = 0;
      for (let i = 0; i < this.exam.modules.length; i++) {
        var questionList = this.exam.modules[i].questionList;
        for (let j = 0; j < questionList.length; j++) {
          var question = questionList[j];
          if (question.status != 0) {
            ans += question.studentScore;
            // console.log(ans);
          }
        }
      }
      // console.log(ans)
      return ans;
    },
    tags() {
      var tags = [];
      var modules = this.exam.modules;
      for (let i = 0; i < modules.length; i++) {
        var questionList = modules[i].questionList;
        for (let j = 0; j < questionList.length; j++) {
          tags.push(questionList[j]);
        }
      }
      return tags;
    },
  },
  methods: {
    toList() {
      this.$router.push({ name: "record" });
    },
    questionStatus(status, type) {
      if (status === -1) {
        return `danger`;
      } else if (status === 0) {
        return `warning`;
      } else if (status === 1 && type != 4) {
        return `success`;
      } else if (status === 1 && type === 1) {
        return ``;
      }
    },
    goAnchor(id) {
      this.$el.querySelector(id).scrollIntoView({
        behavior: "instant",
        block: "center",
        inline: "nearest",
      });
    },
    updateExam(n, o) {
      n.status = 2; //对于简答题只能是0和2表示等待审批和已审批完
      var modules = this.exam.modules;
      for (let i = 0; i < modules.length; i++) {
        var questionList = modules[i].questionList;
        var idx = questionList.indexOf(o);
        if (idx !== -1) {
          questionList[idx] = n;
          return;
        }
      }
    },
    IndexCompute(idx, j) {
      var ans = 0;
      for (let i = 0; i < idx; i++) {
        ans += this.exam.modules[i].questionList.length;
      }
      return ans + j + 1;
    },
  },
};
</script>

<style scoped>
#check {
  width: 100%;
  background: #eff3f7;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
#l-side {
  position: fixed;
  background: #fff;
  width: 300px;
  height: 100%;
  box-sizing: border-box;
  padding: 15px;
}
.info {
  border-bottom: 1px solid #e6e6e6;
}
.menu {
  box-sizing: border-box;
  padding: 10px 0px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.tag {
  margin-bottom: 5px;
  margin-left: 5px;
  cursor: pointer;
}
.tool {
  display: flex;
  padding-top: 8px;
  border-top: 1px solid #e6e6e6;
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
.card {
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
}
#r-main {
  width: calc(100% - 340px);
  margin-left: 320px;
  background: #fff;
}
</style>