<template>
  <div id="histogramEcharts" style="height:274px">

  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    data() {
      return {
        option: {
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          color: ['#2ec7c9', '#b6a2de', '#5ab1ef'],
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }],
          yAxis: [{
            type: 'value'
          }],
          series: [
            {
              name: 'pageA',
              type: 'bar',
              stack: 'vistors',
              barWidth: '60%',
              data: [79, 52, 200, 334, 390, 330, 220],
            }, 
            {
              name: 'pageB',
              type: 'bar',
              stack: 'vistors',
              barWidth: '60%',
              data: [80, 52, 200, 334, 390, 330, 220],
            }, 
            {
              name: 'pageC',
              type: 'bar',
              stack: 'vistors',
              barWidth: '60%',
              data: [30, 52, 200, 334, 390, 330, 220],
            }
          ]
        }
      }
    },
    mounted() {
      this.tableCreate();
    },
    methods: {
      tableCreate : function() {
        var myChart = echarts.init(document.getElementById('histogramEcharts'));
        myChart.setOption(this.option);
      },
    }
  }
</script>