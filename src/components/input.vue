<template>
  <div>
    <Input v-model="inputValue.value" placeholder="请输入..." style="width: 300px"></Input>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    props: {
      inputValue:{
        type: Object
      }
    },
    mounted(){
        console.log('子')
      console.log(this.inputValue.value);
    }
  }
</script>
