<template>
  <div>
    <Spin fix v-if="show" ref="spin">
        <icon name="vue" spin></icon>
        <div>页面正在加载...</div>
    </Spin>
  </div>
</template>

<script>
export default {
  data(){
      return {
        show: true,
　　　}
  },
}
</script>

<style lang="css">
</style>
