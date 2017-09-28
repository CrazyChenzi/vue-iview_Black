<template>
    <div id="roleEcharts" style="height:274px">

    </div>
</template>
<script>
  import echarts from 'echarts'
  import role_echartsMock from './roles_echarts.mock.js'
  export default {
    data() {
      return {
        option: {
          title : {
            text: '南丁格尔玫瑰图',
            x:'center'
          },
          color: [],
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            x : 'center',
            y : 'bottom',
            data:[],
          },
          toolbox: {
            show : true,
            feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: false},
              magicType : {
                show: true,
                type: ['pie', 'funnel']
              },
              restore : {show: true},
              saveAsImage : {show: true}
            }
          },
          calculable : true,
          series : [
            {
              name:'面积模式',
              type:'pie',
              radius : [20, 80],
              center : ['50%', '50%'],
              roseType : 'area',
              data:[]
            }
          ]
        }
      }
    },
    created() {
      this.getOption();
    },
    mounted() {
      
    },
    methods: {
      tableCreate : function() {
        let myChart = echarts.init(document.getElementById('roleEcharts'));
        myChart.setOption(this.option);
      },
      getOption : function () {
        this.axios.get("http://127.1.1.0:8080").then(res => {
            this.option.color=res.data.color;
            this.option.legend.data=res.data.legendData;
            this.option.series[0].data=res.data.seriesData;
            this.tableCreate();
        }).catch(res => {
          console.log(res,"---")
        })
      }
    }
  }
</script>