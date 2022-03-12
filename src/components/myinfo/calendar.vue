<template>
  <div id="calendar" class="animate__animated animate__fadeIn"></div>
</template>


<script>
export default {
  name: "calendar",
  data() {
    return {
      dateMap: [],
    };
  },
  created() {
    //1,3,5,7,8,10,12
    const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var now = new Date();
    var year = now.getFullYear() - 1; //去年
    var month = now.getMonth() + 1; //月
    var day = now.getDate(); //日
    var twice = false;
    for (var i = month + 1; !twice || i < month + 1; i++) {
      if (i > 12) {
        i -= 12;
        twice = true;
        year += 1;
      }
      for (let j = 1; j <= days[i]; j++) {
        if (i === month && twice && j === day + 1) {
          break;
        }
        var date = year + "-";
        if (i < 10) date += "0";
        date += i + "-";
        if (j < 10) date += "0";
        date += j;
        this.dateMap.push([date, 0]);
        if (
          ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) &&
          i == 2 &&
          j === 28
        ) {
          //闰年
          this.dateMap.push([year + "-02-28", 0]);
        }
      }
    }
    this.apis.myinfo
      .getActivity(sessionStorage.getItem("username"))
      .then((res) => {
        if (res.status === 200) {
          var data = res.data.result;
          for (let i = 0; i < this.dateMap.length; i++) {
            for (let j = 0; j < data.length; j++) {
              if (this.dateMap[i][0] === data[j].id.cdate) {
                this.dateMap[i][1] = data[j].activity;
              }
            }
          }
          this.loadCalendar();
        }
      });
  },
  methods: {
    loadCalendar() {
      this.$nextTick(function () {
        let myChart = echarts.init(document.getElementById("calendar"));
        let option = {
          title: {
            top: 0,
            text: "",
            left: "left",
            textStyle: {
              color: "#3C4858",
            },
          },
          tooltip: {
            padding: 10,
            backgroundColor: "#fff",
            borderColor: "#777",
            borderWidth: 1,
            formatter: function (obj) {
              var value = obj.value;
              return (
                '<div style="font-size: 14px;">' +
                value[0] +
                "：" +
                value[1] +
                "</div>"
              );
            },
          },
          visualMap: {
            show: true,
            showLabel: true,
            categories: [0, 1, 2, 3, 4],
            calculable: true,
            inRange: {
              symbol: "rect",
              color: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
            },
            itemWidth: 12,
            itemHeight: 12,
            orient: "horizontal",
            left: "center",
            bottom: 20,
          },
          calendar: [
            {
              left: "center",
              range: [
                this.dateMap[0][0],
                this.dateMap[this.dateMap.length - 1][0],
              ],
              cellSize: [16, 16],
              splitLine: {
                show: false,
              },
              itemStyle: {
                width: "1.88679%",
                height: "15px",
                // color: "#8b949e",
                borderColor: "#FFF",
                borderWidth: 2,
              },
              yearLabel: {
                show: false,
              },
              monthLabel: {
                nameMap: "cn",
                fontWeight: "lighter",
                fontSize: 12,
                color: "#8b949e",
              },
              dayLabel: {
                show: true,
                formatter: "{start}  1st",
                fontWeight: "lighter",
                nameMap: ["日", " ", " ", "三", " ", " ", "六"],
                fontSize: 12,
                color: "#8b949e",
              },
            },
          ],
          series: [
            {
              type: "heatmap",
              coordinateSystem: "calendar",
              calendarIndex: 0,
              data: this.dateMap,
            },
          ],
        };
        myChart.setOption(option);
      });
    },
  },
};
</script>


<style scoped>
#calendar {
  width: 100%;
  height: 100%;
}
</style>