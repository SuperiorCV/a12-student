<template>
  <div id="homepage">
    <div id="l-side">
      <div id="main">
        <sidebar :checked="checked"></sidebar>
        <input type="checkbox" name="open" id="open" v-model="checked" />
        <label for="open" class="bt">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <img
          width="170px"
          id="logo"
          src="../../../static/images/homepage/logo.png"
          alt=""
        />
        <div class="avatar">
          <div class="top">
            <img
              width="80px"
              height="80px"
              src="https://s3.bmp.ovh/imgs/2022/01/a714525bf61d4a6a.png"
              alt=""
            />
            <div class="info">
              <strong>郎少主~</strong>
              <p class="username">
                1422257646<el-tooltip
                  effect="dark"
                  content="编辑个人资料"
                  placement="right"
                  ><i class="fas fa-pen-alt edit"></i>
                </el-tooltip>
              </p>
            </div>
          </div>
          <div class="bottom">编辑个人资料</div>
        </div>
        <p class="title">个人成就</p>
        <div class="achievements">
          <div class="item time">
            <div class="t-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                fill="currentColor"
                color="rgba(90,200,250, 1)"
                class="css-kfex1q-Svg ea8ky5j0"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.438 4.417A1 1 0 016.251 4h11.498a1 1 0 01.813.417l3.952 5.512a1 1 0 01-.093 1.277l-8.982 9.304a2 2 0 01-2.878 0L1.58 11.206a1 1 0 01-.093-1.277l3.952-5.512zm2.27 4.876a1 1 0 00-1.415 1.414l5 5a1 1 0 001.414 0l5-5a1 1 0 00-1.414-1.414L12 13.586 7.707 9.293z"
                  clip-rule="evenodd"
                ></path></svg
              ><span class="subtitle">征战时长</span
              ><span class="content">30h</span>
            </div>
            <div class="b-content">
              <el-progress :percentage="70" status="success"></el-progress>
            </div>
          </div>
          <div class="item">
            <div class="t-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                fill="currentColor"
                color="rgba(0,122,255, 1)"
                class="css-kfex1q-Svg ea8ky5j0"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.04 9.11l3.297-7.419a1 1 0 01.914-.594 3.67 3.67 0 013.67 3.671V7.33h4.028a2.78 2.78 0 012.78 3.2l-1.228 8.01a2.778 2.778 0 01-2.769 2.363H5.019a2.78 2.78 0 01-2.78-2.78V11.89a2.78 2.78 0 012.78-2.78H7.04zm-2.02 2a.78.78 0 00-.781.78v6.232c0 .431.35.78.78.78H6.69V11.11H5.02z"
                  clip-rule="evenodd"
                ></path></svg
              ><span class="subtitle">战役次数</span
              ><span class="content">20</span>
            </div>
            <div class="b-content">
              <span class="one">昨日</span><span class="two">+0</span>
            </div>
          </div>
          <div class="item">
            <div class="t-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                fill="currentColor"
                color="rgba(45,181,93, 1)"
                class="css-kfex1q-Svg ea8ky5j0"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.104 12.444a1 1 0 010-.888c.13-.26.37-.693.722-1.241A18.85 18.85 0 013.88 7.652C6.184 5.176 8.896 3.667 12 3.667s5.816 1.509 8.119 3.985c.79.85 1.475 1.756 2.055 2.663.352.548.593.98.722 1.24a1 1 0 010 .89c-.13.26-.37.692-.722 1.24a18.848 18.848 0 01-2.055 2.663c-2.303 2.476-5.015 3.985-8.119 3.985s-5.816-1.509-8.119-3.985a18.846 18.846 0 01-2.055-2.663c-.352-.548-.593-.98-.722-1.24zM12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                ></path></svg
              ><span class="subtitle">战胜题数</span
              ><span class="content">506</span>
            </div>
            <div class="b-content">
              <span class="one">昨日</span><span class="two">+0</span>
            </div>
          </div>
          <div class="item">
            <div class="t-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                fill="currentColor"
                color="rgba(255,161,22, 1)"
                class="css-kfex1q-Svg ea8ky5j0"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.394 2.074a2.5 2.5 0 011.212 0c.723.181 1.185.735 1.526 1.262.342.528.703 1.259 1.131 2.127l.392.795c.302.61.348.667.386.7a.498.498 0 00.086.063c.043.025.11.052.786.15l.877.128c.958.139 1.764.256 2.372.418.606.162 1.276.43 1.671 1.062a2.5 2.5 0 01.375 1.152c.052.744-.333 1.354-.728 1.841-.397.489-.98 1.058-1.674 1.733l-.634.619c-.489.476-.527.537-.548.583a.5.5 0 00-.033.101c-.01.05-.015.122.1.794l.15.873c.164.954.302 1.758.335 2.386.034.627-.014 1.346-.493 1.918-.263.314-.6.558-.98.712-.692.279-1.39.102-1.976-.124-.588-.226-1.309-.605-2.165-1.056l-.785-.412c-.603-.317-.674-.335-.724-.34a.497.497 0 00-.106 0c-.05.005-.12.023-.724.34l-.785.412c-.856.45-1.577.83-2.165 1.056-.585.226-1.284.403-1.976.124a2.5 2.5 0 01-.98-.712c-.48-.572-.527-1.291-.493-1.918.033-.628.171-1.431.335-2.386l.15-.873c.115-.672.11-.745.1-.794a.5.5 0 00-.033-.101c-.02-.046-.06-.107-.548-.583l-.634-.619c-.694-.675-1.277-1.244-1.674-1.733-.395-.487-.78-1.097-.728-1.841a2.5 2.5 0 01.375-1.152c.395-.633 1.065-.9 1.67-1.062.61-.162 1.415-.28 2.373-.418l.877-.128c.675-.098.743-.125.786-.15a.5.5 0 00.086-.062c.038-.034.084-.09.386-.701l.392-.795c.428-.868.789-1.599 1.131-2.127.341-.527.803-1.08 1.526-1.262z"
                  clip-rule="evenodd"
                ></path></svg
              ><span class="subtitle">已斩错题</span
              ><span class="content">7</span>
            </div>
            <div class="b-content">
              <span class="one">昨日</span><span class="two">+2</span>
            </div>
          </div>
        </div>
        <p class="title">个人简介</p>
        <div class="description">
          <div class="element">
            <i class="fad fa-venus-mars"></i>
            <span>男</span>
          </div>
          <div class="element">
            <i class="fad fa-house"></i>
            <span>天津大学</span>
          </div>
          <div class="element">
            <i class="fad fa-mailbox"></i>
            <span>1422257646@qq.com</span>
          </div>
        </div>
        <p class="title">擅长技能</p>
        <div id="chart"></div>
      </div>
    </div>
    <div id="r-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import sidebar from "@/components/homepage/sidebar.vue";
export default {
  name: "homepage",
  components: {
    sidebar,
  },
  created() {},
  mounted() {
    var that = this;
    setTimeout(function () {
      that.checked = true;
    }, 100);
    this.initChart();
  },
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    initChart() {
      this.$nextTick(function () {
        var chartDom = document.getElementById("chart");
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          // title: {
          //   text: 'Multiple Radar'
          // },
          tooltip: {
            trigger: "axis",
          },
          legend: {
            left: "center",
            data: ["A Software"],
          },
          radar: [
            {
              indicator: [
                { text: "精准", max: 100 },
                { text: "得分", max: 100 },
                { text: "速度", max: 100 },
                { text: "优秀", max: 100 },
              ],
              center: ["50%", "50%"],
              radius: 80,
            },
          ],
          series: [
            {
              type: "radar",
              tooltip: {
                trigger: "item",
              },
              areaStyle: {},
              data: [
                {
                  value: [60, 73, 85, 40],
                  // name: 'A Software'
                },
              ],
            },
          ],
        };

        option && myChart.setOption(option);
      });
    },
  },
};
</script>

<style scoped>
#homepage {
  width: 100%;
  min-height: 100vh;
  background: rgba(247, 248, 250, 1);
  display: flex;
  justify-content: space-between;
}
#l-side {
  width: 340px;
  min-height: 100vh;
  position: fixed;
  height: 100%;
  /* background: pink; */
}
#logo {
  margin: 0 0 0 120px;
}
#main {
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0 auto;
  background: #fff;
  border-radius: 8px;
  min-height: 300px;
  box-shadow: 0px 1px 2px rgba(33, 40, 53, 0.1),
    0px 2px 8px rgba(33, 40, 53, 0.08);
  margin-top: 10px;
  width: 95%;
  box-sizing: border-box;
  padding: 20px;
  height: 100%;
  position: relative;
}
.avatar {
  margin-top: 20px;
  width: 100%;
}
.top {
  width: 100%;
  height: 100px;
  display: flex;
  box-sizing: border-box;
  padding: 10px 0;
  align-items: center;
  justify-content: space-between;
}
.info {
  margin-left: 30px;
  height: 60px;
  /* background: red; */
  font-size: 20px;
  width: calc(100% - 100px);
}
.username {
  padding: 0;
  margin: 0;
  letter-spacing: 2px;
  color: 175, 180, 189;
  margin-top: 10px;
  font-size: 14px;
  position: relative;
}
.username:hover .edit {
  opacity: 1;
}
.edit {
  opacity: 0;
  position: absolute;
  top: 5px;
  right: 50px;
  transition: all 0.4s;
}
.bottom {
  margin: 0 auto;
  width: 100%;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
  background: rgba(133, 144, 166, 0.15);
  color: rgba(33, 40, 53, 0.75);
}
.bottom:hover {
  background: rgba(133, 144, 166, 0.08);
}
.title {
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
  margin: 16px 0;
}
.achievements {
  width: 100%;
  /* min-height: 200px; */
  /* background: pink; */
}
.item {
  width: 100%;
  height: 60px;
  /* background: purple; */
  color: rgba(33, 40, 53, 0.75);
}
.item .subtitle {
  margin-left: 10px;
}
.item .content {
  font-weight: 600;
  margin-left: 10px;
  color: #000;
}
.t-title {
  display: flex;
}
.b-content {
  margin-left: 26px;
  color: rgba(52, 61, 73, 0.6);
}
.one {
  margin-left: 8px;
  color: rgba(52, 61, 73, 0.6);
  font-size: 14px;
}
.two {
  margin-left: 4px;
  color: rgba(52, 61, 73, 0.3);
  font-size: 14px;
}
svg {
  width: 22px;
  height: 22px;
}
.description {
  width: 100%;
  /* min-height: 200px; */
  /* background: pink; */
}
.element {
  font-size: 18px;
  color: rgba(33, 40, 53, 0.75);
  margin-bottom: 8px;
}
.element span {
  margin-left: 10px;
}
#main::-webkit-scrollbar {
  width: 0px;
}
input {
  position: fixed;
  top: -1100px;
  left: -1400px;
  opacity: 0;
}
.bt {
  position: absolute;
  top: 20px;
  left: 25px;
  width: 60px;
  height: 45px;
  z-index: 999;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  transform: scale(0.7);
}

.bt span {
  position: relative;
  display: block;
  width: 100%;
  height: 9px;
  left: 0;
  border-radius: 9px;
  background-color: #ff6b6b;
  opacity: 1;
  transition: all 0.5s ease-in-out;
  background-color: #666;
  box-shadow: rgba(102, 102, 102, 0.4) 0px 4px 12px;
}

input:checked ~ .bt span {
  box-shadow: rgba(255, 107, 107, 0.4) 0px 4px 12px;
  background-color: #ff6b6b;
}

input:checked ~ .bt span:nth-child(1) {
  transform: translateY(18px) rotate(-135deg);
}

input:checked ~ .bt span:nth-child(2) {
  transform: translateX(60px);
  opacity: 0;
}

input:checked ~ .bt span:nth-child(3) {
  transform: translateY(-18px) rotate(135deg);
}
#chart {
  width: 100%;
  height:300px;
}
#r-main {
  width: calc(100% - 340px);
  min-height: 100vh;
  /* background: green; */
}
</style>