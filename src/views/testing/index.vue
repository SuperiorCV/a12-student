<template>
  <div id="testing">
    <screenShot ref="screenShot"></screenShot>
    <Vcode
      sliderText="拖动滑块完成试卷提交"
      :show="isShow"
      @success="success"
      @close="close"
    ></Vcode>
    <div id="l-side" class="animate__animated animate__fadeInLeft">
      <h3>{{ exam.title }}</h3>
      <div class="info">
        <p>答卷人：{{ exam.student }} 同学</p>
        <p>考试时间：{{ exam.duration }} 分钟</p>
        <p>考试总分： {{ exam.fullScore }} 分</p>
      </div>
      <div class="menu">
        <el-tag
          :effect="item.status === 1 ? `dark` : `light`"
          class="tag"
          :type="questionStatus(item.status, item.questionType)"
          v-for="(item, j) in tags"
          :key="j"
          @click="goAnchor(`#question-${item.id}`)"
          >{{ j + 1 }}</el-tag
        >
      </div>
      <div class="countDown">
        <p>
          剩余时间: <strong>{{ extra }}</strong>
        </p>
      </div>
      <div class="tool">
        <el-button type="primary" plain @click="submit"> 提交试卷</el-button>
      </div>
    </div>
    <div id="r-main">
      <div class="module" v-for="(mod, idx) in exam.modules" :key="idx">
        <div class="header">
          <h3>模块{{ idx + 1 }}：{{ mod.title }}</h3>
        </div>
        <div
          :id="`question-${question.id}`"
          class="card"
          v-for="(question, j) in mod.questionList"
          :key="j"
        >
          <QuestionShow
            :IndexCompute="IndexCompute(idx, j)"
            :question="question"
            @updateExam="updateExam"
          ></QuestionShow>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import screenShot from "@/components/testing/screenShot.vue";
import QuestionShow from "@/components/testing/questionShow.vue";
import Vcode from "vue-puzzle-vcode";
export default {
  name: "testing",
  components: {
    screenShot,
    QuestionShow,
    Vcode,
  },
  created() {
    var submit = this.getSubmitTime();
    var that = this;
    localStorage.setItem("submitTime", submit);
    setInterval(function () {
      that.extra = that.countdown(localStorage.getItem("submitTime"));
    }, 1000);
    setInterval(function () {
      that.$refs.screenShot.getCompetence();
    }, (that.exam.duration / 10) * 60000);
    this.$nextTick(() => {
      // 禁用右键
      // document.oncontextmenu = new Function("event.returnValue=false");
      // // 禁用选择
      // document.onselectstart = new Function("event.returnValue=false");
      // // 禁用f12
      // document.οnkeydοwn = new Function("event.returnValue=false");
      // // 上面的禁止f12那段代码没有生效，但是加了下面这段就能生效。
      // document.onkeydown = function (e) {
      //   if (e && e.keyCode === 123) {
      //     e.returnValue = false;
      //     // e.keyCode = 0   //去掉也可以的，倘若要写，则需要setter 以及 getter配合使用，不配合，会报错
      //     return false;
      //   }
      // };
    });
    this.apis.exam.getExamInfo(sessionStorage.getItem("eid")).then((res) => {
      // console.log(res);
      var data = res.data.result.exam;
      this.exam.student = sessionStorage.getItem("username");
      this.exam.fullScore = data.totalScore;
      this.exam.duration = data.duration;
      this.exam.title = data.title;
    });

    this.apis.exam
      .getQuestionList(sessionStorage.getItem("eid"))
      .then((res) => {
        var modules = res.data.result;
        for (let i = 0; i < modules.length; i++) {
          var questionList = modules[i].questionList;
          for (let j = 0; j < questionList.length; j++) {
            var question = questionList[j];
            if (question.questionType === 4) {
              question.studentAnswer = "";
            } else if (question.questionType === 5) {
              question.studentAnswer = question.items;
            } else {
              question.studentAnswer = [];
            }
          }
        }
        this.exam.modules = modules;
      });
  },
  destroyed() {
    // 禁用右键
    document.oncontextmenu = new Function("event.returnValue=true");
    // 禁用选择
    document.onselectstart = new Function("event.returnValue=true");
    // 禁用f12
    document.οnkeydοwn = new Function("event.returnValue=true");
    // 上面的禁止f12那段代码没有生效，但是加了下面这段就能生效。
    document.onkeydown = function (e) {
      if (e && e.keyCode === 123) {
        e.returnValue = true;
        // e.keyCode = 0   //去掉也可以的，倘若要写，则需要setter 以及 getter配合使用，不配合，会报错
        return true;
      }
    };
  },
  data() {
    return {
      isShow: false, // 验证码模态框是否出现
      extra: ``,
      exam: {
        fullScore: 150,
        total: 30,
        student: "langwenchong",
        title: "第一次试验检测",
        tip: "",
        examClass: [],
        dateMap: [],
        duration: 10,
        modules: [],
      },
    };
  },
  computed: {
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
    countdown(time) {
      var nowTime = +new Date(); //返回当前时间总的毫秒数
      var ddl = +new Date(time); //返回用户输入的截止时间
      var res = ddl - nowTime; //剩余时间总的毫秒数
      res = res / 1000; //毫秒换算成秒
      var h = parseInt((res / 60 / 60) % 24); //时
      h = h < 10 ? "0" + h : h;
      var m = parseInt((res / 60) % 60); //分
      m = m < 10 ? "0" + m : m;
      var s = parseInt(res % 60); //秒
      s = s < 10 ? "0" + s : s;
      return h + "时" + m + "分" + s + "秒";
    },
    getSubmitTime() {
      var now = new Date();
      var time = now.getTime();
      var submit = time + this.exam.duration * 60 * 1000;
      var date = new Date(submit);
      //获取年份
      var YY = date.getFullYear();
      //获取月份
      var MM =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      //获取日期
      var DD = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      //获取小时
      var hh = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      //获取分
      var mm =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      ///获取秒
      var ss =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      //返回时间格式： 2020-11-09 13:14:52
      return YY + "-" + MM + "-" + DD + " " + hh + ":" + mm + ":" + ss;
    },
    updateExam(n, o) {
      // console.log(n);
      if (n.studentAnswer != `` && n.studentAnswer != []) {
        n.status = 1;
      } else {
        n.status = 0;
      }
      var modules = this.exam.modules;
      for (let i = 0; i < modules.length; i++) {
        var questionList = modules[i].questionList;
        // var idx = questionList.indexOf(o);
        for (let j = 0; j < questionList.length; j++) {
          if (questionList[j].id === n.id) {
            questionList[j] = n;
            return;
          }
        }
      }
    },
    questionStatus(status, type) {
      if (status === 1) {
        return `success`;
      } else if (status === 0) {
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
    IndexCompute(idx, j) {
      var ans = 0;
      for (let i = 0; i < idx; i++) {
        ans += this.exam.modules[i].questionList.length;
      }
      return ans + j + 1;
    },
    submit() {
      this.isShow = true;
    },
    // 用户通过了验证
    success(msg) {
      this.isShow = false; // 通过验证后，需要手动隐藏模态框
      var ans = [];
      for (let i = 0; i < this.exam.modules.length; i++) {
        var questionList = this.exam.modules[i].questionList;
        for (let j = 0; j < questionList.length; j++) {
          var question = questionList[j];
          if (question.questionType === 2) {
            var answer = "";
            for (let i = 0; i < question.studentAnswer.length; i++) {
              answer += question.studentAnswer[i];
            }
            question.studentAnswer = answer;
          } else if (question.questionType === 5) {
            var answer = "";
            for (let i = 0; i < question.studentAnswer.length; i++) {
              answer +=question.studentAnswer[i].prefix;
            }
            question.studentAnswer = answer;
          }
          ans.push(question);
        }
      }
      console.log(ans);
    },
    // 用户点击遮罩层，应该关闭模态框
    close() {
      this.isShow = false;
    },
  },
};
</script>
<style scoped>
#testing {
  background: #eff3f7;
  display: flex;
  width: 100%;
  min-height: 100vh;
}
#l-side {
  top: 10px;
  left: 10px;
  position: fixed;
  background: #fff;
  /* min-height: 200px; */
  width: 300px;
  height: calc(100% - 10px);
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
  /* justify-content: space-between; */
  width: 100%;
}
.tag {
  margin-bottom: 5px;
  margin-left: 5px;
  cursor: pointer;
}
.countDown {
  border-top: 1px solid #e6e6e6;
  padding-top: 8px;
}
.countDown strong {
  color: red;
}
.tool {
  display: flex;
  padding-top: 8px;
  border-top: 1px solid #e6e6e6;
}
.header {
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
  margin-top: 10px;
  width: calc(100% - 340px);
  /* min-height: 200px; */
  margin-left: 320px;
  background: #fff;
}
</style>