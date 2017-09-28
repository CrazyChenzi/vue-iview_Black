<template>
    <div>
      <Button @click="openModel" v-btn-Disabled="!isAdd" >
        点击打开弹框
      </Button>
        <Modal
            v-model="isAdd"
                :mask-closable="false"
            >
            <p slot="header" style="text-align:center;cursor:move" v-drag>
                <Icon type="information-circled"></Icon>
                <span>普通的Modal对话框标题</span>
            </p>
            <p>对话框内容</p>
            <p>对话框内容</p>
            <p>对话框内容</p>
        </Modal>
    </div>
</template>
<script>
    export default {
        data(){
            return {
              isAdd: false
　　　　　　 }
        },
        methods: {
          openModel : function() {
            document.getElementsByClassName('ivu-modal')[0].style.left = '';
            document.getElementsByClassName('ivu-modal')[0].style.top = '';
            this.isAdd = true;
          }
        },
        directives:{
            drag(el){
                var oDiv = el;
                var i = 1;
                var manyTop = '';
                var manyLeft = '';
                oDiv.onmousedown = function(ev){
                    var disX = "";
                    var disY = "";
                    if(i!==1 && manyTop !== ""){
                        console.log(oDiv.offsetTop)
                        disY = ev.clientY - Number(manyTop.slice(0,manyTop.length-2));
                        manyTop = "";
                    }else {
                        disY = ev.clientY - oDiv.offsetTop;
                        disY = 30;
                    }
                    if(i !==1 && manyLeft!==""){
                        disX = ev.clientX - Number(manyLeft.slice(0,manyLeft.length-2));
                        manyLeft = "";
                    }else{
                        disX = ev.clientX -oDiv.offsetLeft
                    }
                    document.onmousemove = function(ev){
                        var l = ev.clientX-disX;
                        var t = ev.clientY-disY;

                        i = 2;
                        document.getElementsByClassName('ivu-modal')[0].style.left = l+'px';
                        document.getElementsByClassName('ivu-modal')[0].style.top = t+'px';
                    }
                    document.onmouseup = function(ev){
                        if(document.getElementsByClassName('ivu-modal')[0].style.top !== undefined || document.getElementsByClassName('ivu-modal')[0].style.top !== ""){
                            manyTop = document.getElementsByClassName('ivu-modal')[0].style.top;
                        }
                        if(document.getElementsByClassName('ivu-modal')[0].style.left !== undefined || document.getElementsByClassName('ivu-modal')[0].style.left !== ""){
                            manyLeft = document.getElementsByClassName('ivu-modal')[0].style.left;
                        }
                        document.onmousemove=null;
                        document.onmouseup=null;
                    }
                }
            }
        }
    }
</script>
