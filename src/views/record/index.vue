<template>
  <div id="record">
    <div id="main_container">
      <transition-group appear v-if="record_list.length > 0">
        <card v-for="record in record_list" :key="record.id" :record="record">
        </card>
      </transition-group>
      <div id="nomore-record" v-if="record_list.length <= 0"><h1><i class='fas fa-engine-warning'></i> 您暂时没有任何提交的试卷</h1></div>
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

  data() {
    return {
      record_list: [
        {
          id: "1073",
          commit_time: "2022-01-11 17:56:25",
          paper_status: "True",
          type: "随机类型",
          subject: "math",
          num: 3,
          total: 10,
          release_time: "2022-01-11 17:56:23",
          right_num: 2,
          auto: 2,
          score: 20,
          time: "30min",
        },
        {
          id: "1074",
          commit_time: "2022-01-11 17:56:25",
          paper_status: "True",
          type: "随机类型",
          subject: "math",
          num: 3,
          total: 10,
          release_time: "2022-01-11 17:56:23",
          right_num: 2,
          auto: 2,
          score: 20,
          time: "30min",
        },
        {
          id: "1076",
          commit_time: "2022-01-11 17:56:25",
          paper_status: "True",
          type: "随机类型",
          subject: "math",
          num: 3,
          total: 10,
          release_time: "2022-01-11 17:56:23",
          right_num: 2,
          auto: 2,
          score: 20,
          time: "30min",
        },
        {
          id: "1079",
          commit_time: "2022-01-11 17:56:25",
          paper_status: "False",
          type: "随机类型",
          subject: "Chinese",
          num: 3,
          total: 10,
          release_time: "2022-01-11 17:56:23",
          right_num: 2,
          auto: 2,
          score: 20,
          time: "30min",
        },
      ],
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
#nomore-record{
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