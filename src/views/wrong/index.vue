<template>
  <div id="wrong">
    <transition-group>
      <div
        class="card"
        v-for="(question, j) in questionList"
        :key="question.id"
      >
        <h2 @click="deleteWrong(j)"><i class="fad fa-axe"></i>斩错题!</h2>
        <AnswerShow :edit="edit" :idx="j + 1" :question="question"></AnswerShow>
      </div>
    </transition-group>
  </div>
</template>



<script>
import AnswerShow from "@/components/wrong/answerShow.vue";
export default {
  name: "wrong",
  components: {
    AnswerShow,
  },
  data() {
    return {
      edit: false,
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
          status: -1, //-1表示错误，0表示待批改，1表示正确
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
          status: 1, //-1表示错误，0表示待批改，1表示正确
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
          status: -1, //-1表示错误，0表示待批改，1表示正确
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
          status: -1, //-1表示错误，0表示待批改，1表示正确
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
          status: -1, //-1表示错误，0表示待批改，1表示正确
          answer: "A",
          studentAnswer: "B",
          // -2表示解析
          analyze: "",
          score: 2,
          studentScore: 0,
        },
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
          status: 1, //-1表示错误，0表示待批改，1表示正确
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
    };
  },
  methods: {
    deleteWrong(j) {
      this.questionList.splice(j, 1);
    },
  },
};
</script>

<style scoped>
#wrong {
  position: relative;
  padding-top: 10px;
  width: 100%;
  /* height: 100vh; */
  /* background: pink; */
  padding-left: 20px;
  box-sizing: border-box;
}
span {
  position: relative;
  width: 100% !important;
  display: block;
}
.card {
  position: relative;
  background: #fff;
  border-radius: 8px;
  width: 90%;
  box-sizing: border-box;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ebeef5;
  transition: 0.5s;
}
.card h2 {
  position: absolute;
  font-size: 40px;
  color: grey;
  z-index: 99;
  top: 30%;
  left: 60%;
  opacity: 0;
  transition: 0.3s;
  font-family: "SentyGoldenBell";
}
.card:hover h2 {
  left: 70%;
  color: #ff6b6b;
  opacity: 1;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.v-move {
  transition: all 1s ease;
}
.v-leave-active {
  position: absolute !important;
  width: 88% !important;
}
</style>