<template>
  <div id="chart">
    <div class="header">
      <h3>考试结果分析</h3>
    </div>
    <div class="main">
      <div id="scoreRank"></div>
      <div id="scoreSpread"></div>
      <!-- <div class="yourAnalyze">3</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "chart",
  mounted() {
    this.initscoreRank();
    this.initscoreSpread();
  },
  methods: {
    initscoreRank() {
      this.$nextTick(function () {
        var chartDom = document.getElementById("scoreRank");
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          title: {
            text: '分数分布',
            left: '40%',
            top: '5%',
          },
          tooltip: {
            show: true
          },
          xAxis: {
            max: 12,
          },
          yAxis: {
            max: 100,
          },
          series: [
            {
              symbolSize: 20,
              data: [
                [1, 14.47],
                [2, 23.33],
                [3, 34.96],
                [4, 37.24],
                [5, 46.26],
                [6, 48.84],
                [7, 55.82],
                [8, 65.68],
                [9, 75.68],
                [10, 85.68],
                [11, 95.68],
                
              ],
                itemStyle: {
        normal: {
            shadowBlur: 10,
            shadowColor: 'rgba(120, 36, 50, 0.5)',
            shadowOffsetY: 5,
            color: function(e){
              console.log(e)
              if(e.data[0] === 6){
                return '#ff7979'
              }
              else{
                return '#00a8ff'
              }

            }
        }
    },
              type: 'scatter'
            }
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
            top: '5%',
            icon: 'rect',
            textStyle: {
              fontSize: 15,
            },
            data: [{
              name: '年级平均成绩',
              icon: 'rect',
              },
            {
              name: '你的成绩',
              icon: 'rect',
              itemStyle: {
                    normal: {
                        color: 'rgba(205,225,0,.3)',
                        lineStyle: {
                            color: 'rgba(255,225,0,.3)',
                        },
                    },
                },


              }],
          },
          radar: {
            center: ['50%','60%'],
            name: {
            textStyle: {
                color: '#fff',
                fontSize: 15,
              }
            },
            
            indicator: [
              { name: '单选题', max: 100, color: '#000' },
              { name: '多选题', max: 100, color: '#000' },
              { name: '判断题', max: 100, color: '#000' },
              { name: '排序题', max: 100, color: '#000' },
              { name: '简答题', max: 100, color: '#000' },
             
            ]
          },
          series: [
            {
              name: 'Budget vs spending',
              type: 'radar',
              

              data: [
                
                {
                  value: [80, 70, 60, 50, 40],
                  name: '年级平均成绩',
                  itemStyle: {    
                            color: '#ff7675',
                            borderColor: '#ff7675',
                        },
                  areaStyle: {
                            color: '#ff7675',
                        },
                },
                {
                  value: [70, 80, 70,60, 50],
                  name: '你的成绩',
                  itemStyle: {    
                            color: '#0097e6',
                            borderColor: '#0097e6',
                        },
                  areaStyle: {
                            color: '#0097e6',
                        },
                },

              ]
            }
        ]
              
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
  height: 500px;
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
</style>