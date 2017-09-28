<template>
  <div>
    <Card dis-hover class="card_bottom">
      <p slot="title">普通用法</p>
      <KButton type="light-blue-btn">LB</KButton>
      <KButton type="red-btn">R</KButton>
      <KButton type="blue-btn" >B</KButton>
      <KButton type="green-btn" >G</KButton>
      <KButton type="tiffany-btn" >T</KButton>
      <KButton type="panGreen-btn" >PG</KButton>
      <KButton type="yellow-btn" >Y</KButton>
      <KButton type="primary-btn" >P</KButton>
      <KButton type="info-btn" >I</KButton>
      <KButton type="success-btn" >W</KButton>
      <KButton type="warning-btn" >W</KButton>
      <KButton type="error-btn" >E</KButton>
    </Card>
    <Card dis-hover class="card_bottom">
      <p slot="title">带icon</p>
      <KButton type="light-blue-btn" icon="ios-search">light-blue</KButton>
      <KButton type="red-btn" icon="checkmark-round">red</KButton>
      <KButton type="blue-btn" icon="chevron-left">blue</KButton>
      <KButton type="green-btn" icon="chevron-right">green</KButton>
      <KButton type="tiffany-btn" icon="social-googleplus"></KButton>
      <KButton type="panGreen-btn" icon="social-facebook"></KButton>
      <KButton type="yellow-btn" icon="social-twitter"></KButton>
      <KButton type="primary-btn" icon="ios-search"></KButton>
      <KButton type="info-btn" icon="ios-search"></KButton>
      <KButton type="success-btn" icon="ios-search"></KButton>
      <KButton type="warning-btn" icon="ios-search"></KButton>
      <KButton type="error-btn" icon="ios-search"></KButton>
    </Card>
    <Card dis-hover>
      <p slot="title">更多实例</p>
      <h5>敬请期待！！！</h5>
    </Card>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>
<style lang="scss" scoped>
  .card_bottom{
    margin-bottom: 10px;
  }
</style>
