<template>
  <div>
    <Modal v-model="details.modalDelete" width="360" ref="modalDelete">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="information-circled"></Icon>
        <span>删除确认</span>
      </p>
      <div style="text-align:center">
        <p>此任务删除后，下游 10 个任务将无法执行。</p>
        <p>是否继续删除？</p>
      </div>
      <div slot="footer">
        <Button type="error" size="large" long :loading="details.delete_loading" @click="del">删除</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    props: {
      details: {
        type: Object
      },
    },
    methods: {
      del(){
        this.details.del.del();
      }
    }
  }
</script>
