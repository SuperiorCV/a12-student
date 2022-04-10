<template>
  <div id="chart">
    <div class="header">
      <h3>考试结果分析</h3>
    </div>
    <div class="main">
      <div id="scoreRank"></div>
      <div id="scoreSpread"></div>
      <div class="yourAnalyze">
        <p class="title">智能分析：</p>
        <p class="item">你的排名：{{ rank }}/{{ totalStudents }}</p>
        <p class="item">在本次考试中：你的强项是：<span class="strong">{{ this.Ianalyze[1] }}</span>，希望能继续保持！&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你的弱项是：<span class="weak">{{ this.Ianalyze[0] }}</span>，及时弥补，再接再厉！
        </p>
      </div>
    </div>
  </div>
</template>

<script>
var idx = 0;
export default {
  name: "chart",
  data() {
    return {
      totalStudents: 0,
      rank: 0,
      weakness: "123",
      scorerank: [],
      indicator: [],
      moduleAverageList: [],
      myModuleScoreList: [],
      Ianalyze: [],
    };
  },
  props: {
    eid: String,
  },
  created() {
    this.apis.result
      .getMyAnalyze(sessionStorage.getItem("username"), this.eid)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          var data = res.data.result;
          this.totalStudents =data.peopleNum;
          this.rank = data.rank;
          for(let i=0;i<data.myList.length;i++){
            let pushList = [i,data.myList[i]];
            this.scorerank.push(pushList);
          }
          idx = data.idx,
          this.indicator = data.moduleSumList;
          this.moduleAverageList = data.moduleAverageList;
          this.myModuleScoreList = data.myModuleScoreList;
          this.initscoreRank();
          this.initscoreSpread();

          var min = 1000;
          var max = -1000;
          var minIndex = 0;
          var maxIndex = 0;
          for(let i=0;i<this.indicator.length;i++){
            let you = this.myModuleScoreList[i];
            let grade = this.moduleAverageList[i];
            var distance1 = Number(you)-Number(grade);
            if(distance1<min){
              min = distance1;
              minIndex = i;
            }
          }
          this.Ianalyze.push(this.indicator[minIndex].name);
         
          for(let i=0;i<this.indicator.length;i++){
            
            let you = this.myModuleScoreList[i];
            let grade = this.moduleAverageList[i];
            var distance2 = Number(you)-Number(grade);
            
            if(Number(distance2)-Number(max)>0){
              max = distance2;
              maxIndex = i;
            }
          }
          this.Ianalyze.push(this.indicator[maxIndex].name);
         
          
          
        }
      });
  },
  mounted() {
    
    
  },
  methods: {
    initscoreRank() {
      this.$nextTick(function () {
        var chartDom = document.getElementById("scoreRank");
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          title: {
            text: "分数分布",
            left: "40%",
            top: "5%",
          },
          tooltip: {
            show: true,
          },
          xAxis: {
            max: this.scorerank.length+1,
          },
          yAxis: {
            max: 200,
          },
          series: [
            {
              symbolSize: 20,
              data: this.scorerank,
              itemStyle: {
                normal: {
                  shadowBlur: 10,
                  shadowColor: "rgba(120, 36, 50, 0.5)",
                  shadowOffsetY: 5,
                  color: function (e) {
                    // console.log(this.idx);
                    if (e.data[0] === idx) {
                      return "#ff7979";
                    } else {
                      return "#00a8ff";
                    }
                  },
                },
              },
              type: "scatter",
            },
          ],
        };

        option && myChart.setOption(option);
      });
    },
    initscoreSpread() {
      this.$nextTick(function () {
        var chartDom = document.getElementById("scoreSpread");
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          legend: {
            show: true,
            top: "5%",
            icon: "rect",
            textStyle: {
              fontSize: 15,
            },
            data: [
              {
                name: "年级平均成绩",
                icon: "rect",
              },
              {
                name: "你的成绩",
                icon: "rect",
                itemStyle: {
                  normal: {
                    color: "rgba(205,225,0,.3)",
                    lineStyle: {
                      color: "rgba(255,225,0,.3)",
                    },
                  },
                },
              },
            ],
          },
          radar: {
            center: ["50%", "60%"],
            name: {
              textStyle: {
                color: "#fff",
                fontSize: 15,
              },
            },

            indicator: this.indicator,
          },
          series: [
            {
              name: "Budget vs spending",
              type: "radar",

              data: [
                {
                  value: this.moduleAverageList,
                  name: "年级平均成绩",
                  itemStyle: {
                    color: "#ff7675",
                    borderColor: "#ff7675",
                  },
                  areaStyle: {
                    color: "#ff7675",
                  },
                },
                {
                  value: this.myModuleScoreList,
                  name: "你的成绩",
                  itemStyle: {
                    color: "#0097e6",
                    borderColor: "#0097e6",
                  },
                  areaStyle: {
                    color: "#0097e6",
                  },
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
#chart {
  width: 100%;
  height: 800px;
  box-sizing: border-box;
}
.header {
  display: flex;
  align-items: center;
  height: 64px;
  box-sizing: border-box;
  padding: 10px;
  background: #fafafa;
  border-top: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
}
.main {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  /* background: pink; */
}
#scoreRank {
  width: 50%;
  height: 400px;
}
#scoreSpread {
  width: 40%;
  height: 400px;
}
.yourAnalyze {
  margin: 0 auto;
  height: 200px;
  width: 95%;
  border: solid 2px #000;
}
.yourAnalyze p {
  margin-left: 40px;
}
.yourAnalyze .title {
  font-size: 25px;
  font-weight: 700;
}
.yourAnalyze .item {
  font-size: 20px;
  font-weight: 700;
}
.weak {
  color: #ff7675;
}
.strong {
  color: #2ed573;
}
</style>