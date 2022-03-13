<template>
  <div id="wrong">
    <transition-group appear>
      <div
        class="card"
        v-for="(question, j) in questionList"
        :key="question.id+j"
      >
        <h2 @click="deleteWrong(j)"><i class="fad fa-axe"></i>斩错题!</h2>
        <AnswerShow :edit="edit" :idx="j + 1" :question="question"></AnswerShow>
      </div>
    </transition-group>
    <div class="nomore-wrong" v-if=" questionList.length <= 0">
      <h1><i class="fas fa-engine-warning"></i> 您暂时没有错题</h1>
    </div>
  </div>
</template>



<script>
import AnswerShow from "@/components/wrong/answerShow.vue";
export default {
  name: "wrong",
  components: {
    AnswerShow,
  },
  created() {
    this.apis.wrong.getWrong(sessionStorage.getItem("username")).then((res) => {
      if(res.data.status === 200){
        console.log(res);
        this.questionList = res.data.result;
      }
    })
  },
  data() {
    return {
      edit: false,
      questionList: [],
    };
  },
  methods: {
    deleteWrong(j) {
      this.apis.wrong.killWrong(this.questionList[j].id,this.questionList[j].eid,sessionStorage.getItem("username")).then((res) => {
        if(res.data.status === 200){
          console.log(res);
          this.questionList.splice(j, 1);
        }
      })
      
    },
  },
};
</script>

<style scoped>
#wrong {
  position: relative;
  padding-top: 10px;
  width: 100%;
  min-height: 80vh;
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
  top: 60%;
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
.nomore-wrong {
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: pink; */
  color: grey;
  font-family: SentyGoldenBell;
}
</style>