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
        <h2 class="green" type="text" @click="dialogFormVisible = true">
          <i class="fad fa-smile-plus"></i> 加入班级
        </h2>

        <el-dialog
          title="加入班级"
          class="dialog"
          :visible.sync="dialogFormVisible"
          width="30%"
          :show-close="false"
          center
        >
          <el-form
            class="classForm"
            :model="form"
            ref="form"
            label-width="100px"
          >
            <el-form-item label="班级口令：">
              <el-input placeholder="请输入班级口令" v-model="command">
              </el-input>
            </el-form-item>
          </el-form>

          <div class="join">
            <el-button
              class="joinButton"
              type="primary"
              @click="searchClass()"
              round
              >搜索</el-button
            >
          </div>
          <div
            class="pin-box animate__animated animate__fadeInUp"
            v-for="(box, idx) in result"
            :key="idx"
          >
            <div class="title">
              <span>
                <i class="fad fa-users"></i>
                <b>{{ box.cname }}</b>
              </span>
            </div>
            <p class="info"><b>教学老师：</b>{{ box.username }}</p>
            <div id="status">
              <div class="point" v-state="box.studentNumber"></div>
              <span>{{ box.studentNumber }}人</span>
            </div>
            <el-button
              type="success"
              plain
              @click="joinClass(box.command)"
              class="joinClass"
              >加入班级</el-button
            >
          </div>
        </el-dialog>
      </div>
      <div class="classList">
        <div
          class="pin-box animate__animated animate__fadeInUp"
          v-for="(box, idx) in arr"
          :key="idx"
        >
          <div class="title">
            <span>
              <i class="fad fa-users"></i>
              <b>{{ box.cname }}</b>
            </span>
          </div>
          <p class="info"><b>教学老师：</b>{{ box.username }}</p>
          <div id="status">
            <div class="point" v-state="box.studentNumber"></div>
            <span>{{ box.studentNumber }}人</span>
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
  created() {
    this.apis.myinfo
      .getStudentClass(sessionStorage.getItem("username"))
      .then((res) => {
        if (res.data.status === 200) {
          this.arr = res.data.result;
        }
      });
  },
  data() {
    return {
      command: "",
      result: [],
      arr: [],

      dialogFormVisible: false,

      form: {
        class_id: "",
      },
      search: [],
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
  methods: {
    searchClass() {
      this.apis.myinfo.searchClass(this.command).then((res) => {
        // console.log(res);
        if (res.data.status === 200) {
          this.result = res.data.result;
        }
      });
    },
    joinClass(command) {
      this.apis.myinfo
        .joinClass(sessionStorage.getItem("username"), command)
        .then((res) => {
          if (res.data.status === 200) {
            this.arr.push(res.data.result);
            // console.log(res);
            this.$message({
              message: "成功加入班级！",
              type: "success",
            });
            this.dialogFormVisible = false;
          }
        });
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
  position: relative;
  max-width: 95%;
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

.dialog {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.classForm {
  width: 90%;
}

.join {
  display: flex;
  justify-content: center;
}
.joinButton {
  display: flex;
  justify-content: center;
  width: 180px;
  margin-bottom: 20px;
}
.joinClass {
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
}
</style>