<template>
    <div>
        <!-- <input v-model="dir1" v-my-directive1="dir1"/> -->
　　　　 <!--<input v-model="dir2"  v-btn-Disabled="dir2"/>-->
        <Button type="primary" v-btn-Disabled="isAdd" >点击</Button>
        <div v-drag :style="{width:'100px', height:'100px', background:'aqua', position:'absolute', right:0, top:0}">
        </div>
        <Modal
            v-model="isAdd"
            title="普通的Modal对话框标题"
                v-drag
                class="modelId"
                :mask-closable="false"
            >
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
                self: this,
　　　　　　　　　dir1:'',
　　　　　　　　　dir2:'',
                isAdd: true,
                changeStyle:{top:'20px',left:'-500px'},
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
//         directives:{
// 　　　　　　　//直接绑定函数，作用等同于update,不做准备工作和扫尾工作
//             // myDirective1(val){
//             //     // console.log(val)
//             // },
// 　　　　　　 myDirective2:{
//                     bind(){
// 　　　　　　　　　　　　　//第一次绑定到元素的准备工作
// 　　　　　　　　　　},
//                     update(el,binding){
// 　　　　　　　　　　　　//在绑定到元素后立即以初始值第一次调用，然后每次example2变化都会调用update
//                     if(binding.value!==""){
//                         el.style.color = 'red'
//                     }
                    
// 　　　　　　　　　　　　console.log(el)
// 　　　　　　　　　　　　console.log(binding)
// 　　　　　　　　　　},　　
//                     unbind(){
// 　　　　　　　　　　　　//销毁前的清理工作
// 　　　　　　　　　　}
// 　　　　　　　}
//         }
    }
</script>  