<template>
  <div id="testing">
      <Vcode  sliderText="拖动滑块完成试卷提交" :show="isShow" @success="success" @close="close"></Vcode>
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
import QuestionShow from "@/components/testing/questionShow.vue";
import Vcode from "vue-puzzle-vcode";
export default {
  name: "testing",
  components: {
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
        modules: [
          // 单选题模块
          {
            title: "选择题",
            questionList: [
              {
                id: 1,
                questionType: 1,
                difficult: 3,
                // -1表示标题
                title: "fsfsafsafsfsa",
                items: [
                  { prefix: "A", content: "ggg" },
                  { prefix: "B", content: "gggggg" },
                  { prefix: "C", content: "aaa" },
                  { prefix: "D", content: "cccc" },
                ],
                status: 1, //-1表示错误，0表示待批改，1表示正确
                answer: "A",
                studentAnswer: "C",
                // -2表示解析
                analyze: "fsagsagsagsag",
                score: 1,
                studentScore: 1,
              },
              {
                id: 2,
                questionType: 1,
                difficult: 2,
                // -1表示标题
                title: "fsfsfssd",
                items: [
                  { prefix: "A", content: "fafsa" },
                  { prefix: "B", content: "gsagsgs" },
                  { prefix: "C", content: "faf" },
                  { prefix: "D", content: "fasfs" },
                ],
                status: 0, //-1表示错误，0表示待批改，1表示正确
                answer: "A",
                // -2表示解析
                analyze: "fafsfs",
                studentAnswer: "C",
                score: 2,
                studentScore: 0,
              },
              {
                id: 3,
                questionType: 1,
                difficult: 3,
                // -1表示标题
                title: "fsfsfss",
                items: [
                  { prefix: "A", content: "fsafs" },
                  { prefix: "B", content: "fsaf" },
                  { prefix: "C", content: "fsafs" },
                  { prefix: "D", content: "fsaf" },
                ],
                status: 1, //-1表示错误，0表示待批改，1表示正确
                answer: "D",
                studentAnswer: "C",
                // -2表示解析
                analyze: "",
                score: 2,
                studentScore: 2,
              },
            ],
          },
          {
            title: "多选题",
            questionList: [
              {
                id: 4,
                questionType: 2,
                difficult: 3,
                // -1表示标题
                title: "fsfsafsafsfsa",
                items: [
                  { prefix: "A", content: "ggg" },
                  { prefix: "B", content: "gggggg" },
                  { prefix: "C", content: "aaa" },
                  { prefix: "D", content: "cccc" },
                ],
                status: 1, //
                answer: ["A", "C", "D"],
                studentAnswer: ["A", "C", "D"],
                // -2表示解析
                analyze: "fsagsagsagsag",
                score: 1,
                studentScore: 1,
              },
              {
                id: 5,
                questionType: 2,
                difficult: 2,
                // -1表示标题
                title: "fsfsfssd",
                items: [
                  { prefix: "A", content: "fafsa" },
                  { prefix: "B", content: "gsagsgs" },
                  { prefix: "C", content: "faf" },
                  { prefix: "D", content: "fasfs" },
                ],
                status: 1, //-1表示错误，0表示待批改，1表示正确
                answer: "A",
                // -2表示解析
                answer: ["A", "C", "B"],
                studentAnswer: ["A", "C"],
                score: 2,
                studentScore: 0,
              },
              {
                id: 6,
                questionType: 2,
                difficult: 3,
                // -1表示标题
                title: "fsfsfss",
                items: [
                  { prefix: "A", content: "fsafs" },
                  { prefix: "B", content: "fsaf" },
                  { prefix: "C", content: "fsafs" },
                  { prefix: "D", content: "fsaf" },
                ],
                status: 1, //-1表示错误，0表示待批改，1表示正确
                answer: ["A", "C"],
                studentAnswer: ["A", "C"],
                // -2表示解析
                analyze: "SASASASA",
                score: 2,
                studentScore: 2,
              },
            ],
          },
          {
            title: "判断题",
            questionList: [
              {
                id: 7,
                questionType: 3,
                difficult: 3,
                // -1表示标题
                title: "fsfsafsafsfsa",
                items: [
                  { prefix: "A", content: "正确" },
                  { prefix: "B", content: "错误" },
                ],
                status: 1, //-1表示错误，0表示待批改，1表示正确
                answer: "A",
                studentAnswer: "A",
                // -2表示解析
                analyze: "fsagsagsagsag",
                score: 1,
                studentScore: 1,
              },
              {
                id: 8,
                questionType: 3,
                difficult: 2,
                // -1表示标题
                title: "fsfsfssd",
                items: [
                  { prefix: "A", content: "正确" },
                  { prefix: "B", content: "错误" },
                ],
                status: 0, //-1表示错误，0表示待批改，1表示正确
                answer: "A",
                // -2表示解析
                analyze: "fafsfs",
                studentAnswer: "B",
                score: 2,
                studentScore: 0,
              },
              {
                id: 9,
                questionType: 3,
                difficult: 3,
                // -1表示标题
                title: "fsfsfss",
                items: [
                  { prefix: "A", content: "正确" },
                  { prefix: "B", content: "错误" },
                ],
                status: 1, //-1表示错误，0表示待批改，1表示正确
                answer: "A",
                studentAnswer: "B",
                // -2表示解析
                analyze: "",
                score: 2,
                studentScore: 0,
              },
            ],
          },
          {
            title: "简答题",
            questionList: [
              {
                id: 10,
                questionType: 4,
                difficult: 3,
                title: "fsfsfss",
                status: 0, //-1表示错误，0表示待批改，1表示正确
                answer: "答案1",
                studentAnswer: "sddfsssssssssssssssssss",
                // -2表示解析
                analyze: "SASASASA",
                score: 2,
                studentScore: undefined,
              },
              {
                id: 11,
                questionType: 4,
                difficult: 3,
                // -1表示标题
                title: "fsfsfss",
                status: 0, //-1表示错误，0表示待批改，1表示正确
                answer: "123123",
                studentAnswer: "rtyui",
                // -2表示解析
                analyze: "SASASASA",
                score: 2,
                studentScore: undefined,
              },
              {
                id: 12,
                questionType: 4,
                difficult: 3,
                // -1表示标题
                title: "fsfsfss",
                status: 0, //-1表示错误，0表示待批改，1表示正确
                answer: "456",
                studentAnswer: "oiuttd",
                // -2表示解析
                analyze: "SASASASA",
                score: 2,
                studentScore: undefined,
              },
            ],
          },
          {
            title: "排序题",
            questionList: [
              {
                id: 13,
                questionType: 5,
                difficult: 3,
                // -1表示标题
                title: "fsfsfss",
                items: [
                  { prefix: "A", content: "<pre>A</pre>" },
                  { prefix: "B", content: "<p>B</p>" },
                  { prefix: "C", content: "<pre>C</pre>" },
                  { prefix: "D", content: "<p>D</p>" },
                ],
                status: 0, //-1表示错误，0表示待批改，1表示正确
                answer: [
                  { prefix: "A", content: "<pre>A</pre>" },
                  { prefix: "B", content: "<p>B</p>" },
                  { prefix: "D", content: "<p>D</p>" },
                  { prefix: "C", content: "<pre>C</pre>" },
                ],
                studentAnswer: [
                  { prefix: "A", content: "<pre>A</pre>" },
                  { prefix: "B", content: "<p>B</p>" },
                  { prefix: "C", content: "<pre>C</pre>" },
                  { prefix: "D", content: "<p>D</p>" },
                ],
                // -2表示解析
                analyze: "SASASASA",
                score: 2,
                studentScore: 2,
              },
            ],
          },
        ],
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
      if (n.studentAnswer !== `` && n.studentAnswer !== []) {
        n.status = 1;
      } else {
        n.status = 0;
      }
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
    questionStatus(status, type) {
      if (status === 1) {
        return `success`;
      } else if (status === 0) {
        return `info`;
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