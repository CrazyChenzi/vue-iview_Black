<template>
	<div style="background-color: #000;width:100%;height:100vh">
        <img src="../../../static/img/404-6.gif"  style="margin:calc((100vh - 400px)/2) calc((100vw - 550px)/2)"/>
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