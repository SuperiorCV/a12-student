<template>
  <div id="record">
    <div id="main_container">
      <transition-group appear v-if="record_list.length > 0">
        <card
          v-for="(record, index) in record_list"
          :key="record.title+index"
          :record="record"
        >
        </card>
      </transition-group>
      <div id="nomore-record" v-if="record_list.length <= 0">
        <h1><i class="fas fa-engine-warning"></i> 您暂时没有任何提交的试卷</h1>
      </div>
    </div>
  </div>
</template>


<script>
import card from "@/components/record/card.vue";
export default {
  name: "record",
  components: {
    card,
  },
  created() {
    this.apis.record
      .getExams(sessionStorage.getItem("username"))
      .then((res) => {
        if (res.data.status === 200) {
          // console.log(res);
          let data = res.data.result;
          for (let i = 0; i < data.length; i++) {
            let pushList = new Object();

            pushList.title = data[i].title;
            pushList.commit_time = data[i].submitTime;
            pushList.paper_status = data[i].examState;
            pushList.subject = data[i].subject;
            pushList.num = data[i].questionCnt;
            pushList.total = data[i].totalScore;

            this.record_list.push(pushList);
          }
        }
      });
  },
  data() {
    return {
      record_list: [],
    };
  },
};
</script>


<style scoped>
#record {
  width: 100%;
  min-height: 90vh;
  background: rgba(247, 248, 250, 1);
}

#main_container {
  min-height: 95vh;
  /* background: pink; */
  margin: 10px 20px;
}
#nomore-record {
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