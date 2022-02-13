<template>
  <div id="me">
    <div id="top">
      <div id="calendar-wrapper">
        <calendar></calendar>
      </div>
      <div id="history">
        <history></history>
      </div>
    </div>
    <div id="bottom">
      <div class="myclass">
        <h2><i class="fad fa-users-class"></i> 我的班级</h2>
        <h2 class="green"><i class="fad fa-smile-plus"></i> 加入班级</h2>
      </div>
      <div class="classList">
        <div
          class="pin-box animate__animated animate__fadeInUp"
          v-for="(box, idx) in arr"
          :key="idx"
        >
          <div class="title">
            <span @click="goto(idx)">
              <i class="fad fa-users"></i>
              <b>{{ box.name }}</b>
            </span>
          </div>
          <p class="info"><b>教学老师：</b>{{ box.teacher }}</p>
          <div id="status">
            <div class="point" v-state="box.num"></div>
            <span>{{ box.num }}人</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import calendar from "@/components/myinfo/calendar.vue";
import history from "@/components/myinfo/history.vue";
export default {
  name: "me",
  components: {
    calendar,
    history,
  },
  data() {
    return {
      arr: [
        {
          name: "数据库1班",
          teacher: "郎文翀",
          num: 90,
        },
        {
          name: "高等数学5班",
          teacher: "C罗",
          num: 40,
        },
        {
          name: "数据库1班",
          teacher: "郎文翀",
          num: 110,
        },
        {
          name: "高等数学5班",
          teacher: "C罗",
          num: 73,
        },
        {
          name: "数据库1班",
          teacher: "郎文翀",
          num: 110,
        },
        {
          name: "高等数学5班",
          teacher: "C罗",
          num: 40,
        },
      ],
    };
  },
  directives: {
    state: function (el, binding) {
      if (binding.value >= 100) {
        el.style.backgroundColor = "#f34b7d";
      } else if (binding.value >= 60 && binding.value < 100) {
        el.style.backgroundColor = "#41b883";
      } else if (binding.value < 60) {
        el.style.backgroundColor = "#f1e05a";
      }
    },
  },
};
</script>


<style scoped>
#me {
  /* background: green; */
  width: 100%;
  min-height: 300px;
}
#top {
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 300px;
  padding: 20px;
  border: 1px solid #e1e4e8;
  box-sizing: border-box;
  border-radius: 12px;
}
#history {
  margin-left: 10px;
  margin-right: 20px;
  width: 300px;
  min-height: 200px;
  /* background: yellow; */
}
#calendar-wrapper {
  width: 1100px;
  height: 100%;
  /* background: #000; */
}
#bottom {
  margin-top: 10px;
}
.myclass {
  width: 90%;
  display: flex;
}
h2 {
  margin-right: 20px;
  width: 150px;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  color: rgba(33, 40, 53, 0.6);
  background: rgba(0, 10, 32, 0.05);
  font-family: "hytmr";
}
.green {
  background: #36c873;
  color: #fff;
}
.green:hover {
  opacity: 0.8;
}
.classList {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
}
.pin-box {
  box-shadow: 0px 1px 2px rgba(33, 40, 53, 0.1),
    0px 2px 8px rgba(33, 40, 53, 0.08);
  border-radius: 12px;
  margin-right: 30px;
  width: 450px;
  /* height: 130px; */
  background: #fff;
  border: 1px solid #e1e4e8;
  box-sizing: border-box;
  padding: 16px;
  margin-bottom: 15px;
  line-height: 1.6;
}
.icon {
  margin-right: 10px;
  width: 105px;
  display: flex;
  justify-content: space-between;
}
.icon i {
  font-size: 20px !important;
}
.point {
  width: 10px;
  height: 10px;
  margin-right: 8px;
  border-radius: 50%;
  display: inline-block;
}
.pin-box .title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pin-box .title b {
  color: #0366d6;
  font-size: 16px;
  line-height: 20px;
  margin: 0;
  padding: 0;
}
.pin-box .title i {
  margin-right: 5px;
  color: #586069;
  font-size: 18px;
}
.pin-box .info {
  color: #586069;
  margin-top: 8px;
  font-size: 12px;
  margin-bottom: 5px;
}
.pin-box .point span {
  font-size: 10px;
}
</style>