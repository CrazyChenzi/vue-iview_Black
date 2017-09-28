<template>
<div>
  <div id="attendanceTable" style="height:500px"></div>
</div>
</template>
<script>
    import echarts from 'echarts'
    import loading from '../../components/spin/spin.vue'
    export default {
        data () {
            return {
              option: {
                color: [ "#2ec7c9", "#b6a2de", "#5ab1ef", '#ffb980', '#8d98b3', '#d87a80', '#ef5055' ],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: ['淤泥', '砾石','黏土','粗砂土','细砂土','粉砂土','矿物质土']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis:  {
                    type: 'value'
                },
                yAxis: {
                    type: 'category',
                    data: ['周一','周二','周三','周四','周五','周六','周日']
                },
                series: []
                },
                //原数据
                // [{土质:"淤泥",num:60},{土质:"砾石",num:24}]
                //
                // [{土质:"黏土",num:32},{土质:"淤泥",num:12},{土质:"粗砂土",num:44}]
                //
                // [{土质:"细砂土",num:89},{土质:"粉砂土",num:66},{土质:"黏土",num:38},{土质:"矿物质土",num:78}]
                // chartsList解析 Ynum: 淤泥、 SNum: 砾石、 NNum: 黏土、 CNum: 粗砂土、 XNum: 细砂土、 FNum: 粉砂土、 KNum: 矿物质土
                chartsList: [
                  //周一
                  {
                    YNum: 60,
                    SNum: 24,
                  },
                  //周二
                  {
                    NNum: 32,
                    YNum: 12,
                    CNum: 44,
                  },
                  //周三
                  {
                    XNum: 89,
                    FNum: 66,
                    NNum: 38,
                    KNum: 78,
                  }
                ]
            }
        },
        components: {loading},
        created(){
          this.uncoilChartsList();
        },
        mounted(){
          this.tableCreate();
        },
        beforeRouteLeave (to, from, next){
          next()
        },
        methods: {
          //解开chartsList解构  使echarts可以识别
          uncoilChartsList : function() {
            let YList = [];
            let SList = [];
            let NList = [];
            let CList = [];
            let XList = [];
            let FList = [];
            let KList = [];
            for(let i = 0; i < this.chartsList.length; i++) {
              YList.push(this.judgeChartsList(this.chartsList[i].YNum));
              SList.push(this.judgeChartsList(this.chartsList[i].SNum));
              NList.push(this.judgeChartsList(this.chartsList[i].NNum));
              CList.push(this.judgeChartsList(this.chartsList[i].CNum));
              XList.push(this.judgeChartsList(this.chartsList[i].XNum));
              FList.push(this.judgeChartsList(this.chartsList[i].FNum));
              KList.push(this.judgeChartsList(this.chartsList[i].KNum));
            }
            let arrayList = [];
            // 因为series所接受的格式是
            // series[{
            //   data:[YNum,YNum,YNum,YNum,YNum,YNum,YNum]
            // }]
            // 而数据源格式是
            // 周一
            // {
            //   YNum: 60,
            //   SNum: 24,
            // },
            // 周二
            // {
            //   YNum: 60,
            //   SNum: 24,
            // },
            // 故此：需要上面的for重组数据
            //
            // {
            //   YNum: 60, 周一
            //   YNum: 24, --
            //   YNum: '', --
            //   YNum: '', --
            //   YNum: '', --
            //   YNum: '', --
            //   YNum: '', 周天
            // },
            arrayList.push(YList);
            arrayList.push(SList);
            arrayList.push(NList);
            arrayList.push(CList);
            arrayList.push(XList);
            arrayList.push(FList);
            arrayList.push(KList);
            for(let j = 0; j < arrayList.length; j++) {
              let params = {
                name: this.option.legend.data[j],
                type: 'bar',
                stack: 'one',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        formatter: function(value){
                        return value.seriesName
                        }
                    }
                },
                data: arrayList[j]
              }
              this.option.series.push(
                params
              )
            }
          },
          judgeChartsList : function(val) {
            if(val !== undefined){
              return val;
            }else{
              return '';
            }
          },
          //创建图表
          tableCreate : function() {
            var myChart = echarts.init(document.getElementById('attendanceTable'));
            myChart.setOption(this.option);
          },
        }
    }
</script>
