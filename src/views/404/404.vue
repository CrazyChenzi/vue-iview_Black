<template>
	<div style="background-color: #000;width:100%;height:100vh">
        <!--<img src="../../../static/img/404-6.gif"  style="margin:calc((100vh - 400px)/2) calc((100vw - 550px)/2)"/>-->
        <video class="video-player" preload="auto" autoplay="autoplay" loop="loop" :style="{height:heights + 'px',width:widths +'px' }">
            <source src="../../../static/mp4/login.mp4" type="video/mp4">
            <!-- 此视频文件为支付宝所有，在此仅供样式参考，如用到商业用途，请自行更换为其他视频或图片，否则造成的任何问题使用者本人承担，谢谢 -->
        </video>
	</div>
</template>
<script>
    export default {
        data() {
            return {
                heights: document.documentElement.clientHeight,
                widths: document.documentElement.clientWidth
            }
        },
        created(){
            window.onresize = () => {
    				return(() => {
    					this.heights = document.documentElement.clientHeight;
                        this.widths = document.documentElement.clientWidth;
    					
    				})()
    			}
            window.onload = () => {
                return(() => {
                    this.heights = document.documentElement.clientHeight;
                    this.widths = document.documentElement.clientWidth;
                })()
            }
        },
        mounted() {
             
        },
        methods: {

        }
    }
</script>