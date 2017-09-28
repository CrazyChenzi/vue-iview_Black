<template>
  <div class="header">
    <Row>
      <Col span="7">
        <Card dis-hover>
          <imgHover image='../../../static/img/home.gif' class="imgCenter" slot="title">
            <span style="font-size: 20px; color: red">Black_晨</span>
          </imgHover>
          <h4 style="text-align:center">欢迎访问！！！</h4></br>
          <h5 style="text-align:center">这是一个关于iview的后台管理系统！并不适合做脚手架项目！目前只用于学习...</h5>
        </Card>
      </Col>
      <Col span="8" >
          <role-echarts></role-echarts>
      </Col>
      <Col span="7" offset="1">
          <histogram-echarts></histogram-echarts>
      </Col>
    </Row>
    <Row>
      <Col span="22" offset="1">
        <pictographic-echarts :height="heights - 274 - 180+''"></pictographic-echarts>
      </Col>
    </Row>
  </div>
</template>
<script>
  import imgHover from '../../components/img/imgHover'
  import roleEcharts from '../../components/echarts.components/roles_echarts'
  import histogramEcharts from '../../components/echarts.components/histogram_echarts'
  import pictographicEcharts from '../../components/echarts.components/pictographic_echarts'
  import { mapState } from 'vuex'
  export default {
    components: {
      imgHover, roleEcharts, histogramEcharts, pictographicEcharts
    },
    computed: {
      ...mapState([
        'heights', 'widths'
      ]),
    },
    data() {
      return {

      }
    },
    mounted(){
      console.log(this.heights)
    }
  }
</script>
<style lang="scss" scoped>
  .imgCenter{
    left: 0;
    right: 0;
    margin: 0 auto;
    position: absolute !important;
  }
  .header /deep/ .ivu-card-head{
    height: 180px;
  }
</style>