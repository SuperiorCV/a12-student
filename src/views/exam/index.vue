<template>
  <div id="exam">
    <div id="bg">
      <div class="bg-main">
        <img
          src="../../../static/images/exam/contest.png"
          height="170px"
          width="170px"
          alt=""
        />
        <h1 id="title"><span>考试</span> 竞赛</h1>
        <p class="subtitle">于考试中成长，于竞赛中进步</p>
      </div>
    </div>
    <div id="container">
      <div id="pin" class="animate__animated animate__fadeInDown">
        <div id="ongoing">
          <el-carousel
            type="card"
            trigger="click"
            height="150px"
            indicator-position="none"
            :interval="10000"
          >
            <el-carousel-item v-for="(item, idx) in ongoing" :key="idx">
              <div class="nomore-ongoing" v-if="item.title === '无进行中考试'">
                <h2>
                  <i class="fad fa-smile"></i> 暂时没有正在进行得考试/竞赛
                </h2>
              </div>
              <div class="ongoing" v-if="item.title !== '无进行中考试'">
                <h2 class="in" @click="exam(item)">
                  前往<i class="fad fa-sign-in-alt"></i>
                </h2>
                <img
                  class="icon"
                  src="../../../static/images/exam/ongoing.png"
                  alt=""
                />
                <h2>{{ item.title }}</h2>
                <p id="subject">
                  <img src="../../../static/images/exam/subject.png" /><span
                    class="grey"
                    >考试科目:</span
                  >{{ item.subject }}
                </p>
                <p id="duration">
                  <img src="../../../static/images/exam/duration.png" /><span
                    class="grey"
                    >考试时长:</span
                  >{{ item.duration }}
                </p>
                <p id="time">
                  <img src="../../../static/images/exam/calendar.png" />
                  <span class="grey">参赛时间:</span>{{ item.startTime }}~{{
                    item.endTime
                  }}
                </p>
                <p id="in"></p>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div id="ready" v-if="ready != null">
          <h3>{{ ready.title }}</h3>
          <p id="subject">
            <img src="../../../static/images/exam/subject.png" /><span
              class="grey"
              >考试科目:</span
            >{{ ready.subject }}
          </p>
          <p id="duration">
            <img src="../../../static/images/exam/duration.png" /><span
              class="grey"
              >考试时长:</span
            >{{ ready.duration }}
          </p>

          <p id="countDown" style="color: #ff6b6b">{{ countDown }}后开始</p>
        </div>
        <div id="nomore-ready" v-if="ready === null">
          <h3><i class="fad fa-smile"></i> 暂无考试/竞赛</h3>
        </div>
      </div>
      <div id="list">
        <transition-group appear v-if="extraList.length > 0">
          <item v-for="el in extraList" :key="el.id" :el="el"></item>
        </transition-group>
      </div>
    </div>
  </div>
</template>


<script>
import item from "@/components/exam/item.vue";
export default {
  name: "exam",
  components: {
    item,
  },
  created() {
    var that = this;
    this.getNow();
    setInterval(function () {
      that.getNow();
    }, 1000);
    this.updateData();
    setInterval(function () {
      that.updateData();
    }, 1000);
    this.apis.exam.getExam(sessionStorage.getItem("username")).then((res) => {
      if (res.data.status === 200) {
        var result = res.data.result;
        for (let i = 0; i < result.length; i++) {
          var obj = {};
          obj.id = result[i].eid;
          obj.title = result[i].title;
          obj.startTime = result[i].startTime;
          obj.endTime = result[i].endTime;
          obj.duration = result[i].duration;
          obj.subject = result[i].course;
          this.arr.push(obj);
        }
      }
    });
  },
  methods: {
    exam(item) {
      this.$router.push({ name: "waiting", params: { eid: item.id } });
    },
    getNow() {
      this.now = new Date();
    },
    updateData() {
      var that = this;
      if (that.now != null) {
        that.ready = null;
        that.ongoing = [];
        that.extraList = [];
        var data = that.arr;
        data.sort((a, b) => {
          return a.startTime < b.startTime ? -1 : 1;
        });
        for (let i = 0; i < data.length; i++) {
          var tmp = data[i];
          var d = new Date(Date.parse(tmp.startTime.replace(/-/g, "/")));
          if (d <= that.now) {
            that.ongoing.push(tmp);
          } else {
            that.extraList.push(tmp);
          }
        }
        // console.log(that.ongoing.length)
        if (that.extraList.length > 0) {
          that.ready = that.extraList[0];
        }
        if (that.ongoing.length < 3) {
          var len = 3 - that.ongoing.length;
          for (let i = 0; i < len; i++) {
            that.ongoing.push({ title: "无进行中考试" });
          }
        }
      }
    },
  },
  computed: {
    countDown() {
      if (this.now != null && this.ready != null) {
        var time_now = this.now;
        time_now = time_now.getTime();
        var end = this.ready.startTime.replace(new RegExp("-", "gm"), "/");
        var time_end = new Date(end); // 设定结束时间
        time_end = time_end.getTime();
        var time_distance = time_end - time_now; // 结束时间减去当前时间
        var int_day, int_hour, int_minute, int_second;
        if (time_distance >= 0) {
          // 天时分秒换算
          int_day = Math.floor(time_distance / 86400000);
          time_distance -= int_day * 86400000;
          int_hour = Math.floor(time_distance / 3600000);
          time_distance -= int_hour * 3600000;
          int_minute = Math.floor(time_distance / 60000);
          time_distance -= int_minute * 60000;
          int_second = Math.floor(time_distance / 1000);

          // 时分秒为单数时、前面加零站位
          if (int_hour < 10) int_hour = "0" + int_hour;
          if (int_minute < 10) int_minute = "0" + int_minute;
          if (int_second < 10) int_second = "0" + int_second;

          // 显示时间
          return `${int_day}天${int_hour}时${int_minute}分${int_second}秒`;
        }
      }
    },
  },
  data() {
    return {
      now: null,
      ready: null,
      ongoing: [],
      extraList: [],
      arr: [],
    };
  },
};
</script>

<style scoped>
#exam {
  width: 100%;
  /* background: pink; */
  box-sizing: border-box;
  position: relative;
  /* padding-top: 10px; */
  box-sizing: border-box;
  padding-top: 380px;
}
#bg {
  position: absolute;
  top: 0;
  left: 0;
  border-bottom-left-radius: 8px;
  overflow: hidden;
  width: 100%;
  height: 450px;
  background: linear-gradient(-140deg, #222222 15%, #373737 70%, #3c4859 94%);
  display: flex;
  justify-content: center;
}
#bg #title {
  margin-bottom: 10px;
}
.bg-main {
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  min-height: 200px;
}
.bg-main h1 {
  font-size: 36px;
  color: #b3b3b3;
  font-weight: 100;
  font-family: hytmr;
}
.bg-main span {
  color: #fff;
  font-weight: 500;
}
.subtitle {
  margin-top: 8px;
  color: grey;
  font-size: 18px;
  letter-spacing: 2px;
}
#container {
  margin: 0 auto;
  position: relative;
  z-index: 5;
  width: 95%;
  /* background: yellow; */
}
h3 {
  margin: 5px;
}
#list {
  margin-left: 3%;
  width: 90%;
  margin-bottom: 40px;
  /* min-height: 600px; */
  border-radius: 20px;
  background: #fafafa;
  box-shadow: 0 0 50px 0 rgb(0 0 0 / 15%);
}
#pin {
  justify-content: space-around;
  width: 100%;
  display: flex;
  min-height: 300px;
  /* background: brown; */
}
#ongoing {
  width: 75%;
}
.ongoing {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 30px;
  position: relative;
  /* background: pink; */
  font-weight: 600;
  color: #000;
}
.ongoing img {
  width: 18px;
  position: relative;
  top: 3px;
}
.icon {
  position: absolute !important;
  width: 90px !important;
  top: 0px;
  left: -5px;
}
.ongoing .in {
  position: absolute;
  font-size: 40px;
  color: grey;
  top: 20%;
  left: 50%;
  opacity: 0;
  transition: 0.3s;
  font-family: "SentyGoldenBell";
}
.ongoing:hover .in {
  left: 60%;
  color: #ff6b6b;
  opacity: 1;
}
.grey {
  margin-left: 5px !important;
  margin-right: 8px !important;
  font-weight: 400;
  color: rgba(33, 40, 53, 0.75) !important;
}
.nomore-ongoing {
  font-family: SentyGoldenBell;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 30px;
  position: relative;
  font-weight: 600;
  color: rgb(87, 85, 85);
  display: flex;
  justify-content: center;
  align-items: center;
}
#ready {
  box-sizing: border-box;
  margin-top: 20px;
  width: 20%;
  padding: 20px;
  height: 200px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 18px rgba(0, 0, 0, 0.08), 0 1px 10px rgba(4, 0, 0, 0.1);
}
#ready img {
  width: 18px;
  position: relative;
  top: 3px;
}
#nomore-ready {
  box-sizing: border-box;
  margin-top: 20px;
  width: 20%;
  padding: 20px;
  height: 200px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 18px rgba(0, 0, 0, 0.08), 0 1px 10px rgba(4, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(87, 85, 85);
  font-family: "SentyGoldenBell";
}
</style>