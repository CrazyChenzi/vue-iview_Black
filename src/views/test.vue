<template>
    <div>
        <Modal
            v-model="isAdd"
                :mask-closable="false"
            >
            <p slot="header" style="text-align:center;cursor:move">
                <Icon type="information-circled"></Icon>
                <span>普通的Modal对话框标题</span>
            </p>
            <p>对话框内容</p>
            <p>对话框内容</p>
            <p>对话框内容</p>
            <p>对话框内容</p>
            <p>对话框内容</p>
            <p>对话框内容</p>
            <p>对话框内容</p>
            <p>对话框内容</p>
            <p>对话框内容</p>
        </Modal>
    </div>
</template>

<script>
    import dargs from '../../static/js/drag.1.0'
  export default {
    data() {
      return {
         isAdd:true
      }
    },
    mounted(){
        var ivu = document.getElementsByClassName("ivu-modal");
        var oBox1 = document.getElementsByClassName("ivu-modal-content")[0];
        var oBar1 = document.getElementsByClassName("ivu-modal-header")[0];
        dargs.startDrag(oBar1, oBox1,ivu);
    },
     directives:{
        drag(el){
        }
    },
    methods: {
        
    }
  }
</script>
