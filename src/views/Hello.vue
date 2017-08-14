<template>
  <div class="hello">
    <div>
      <icon name="baidu" spin></icon>
      <icon name="html5-c" spin></icon>
      <icon name="webpack" spin></icon>
      <icon name="vue" spin></icon>
    </div>
  <div style="z-index:999">
    <grid-layout
              :layout="layout"
              :col-num="8"
              :row-height="80"
              :is-draggable="true"
              :is-resizable="false"
              :vertical-compact="false"
              :margin="[10, 10]"
              :use-css-transforms="true"
              >

          <grid-item v-for="(item,index) in layout" :key="index"
                    :x="item.x"
                    :y="item.y"
                    :w="item.w"
                    :h="item.h"
                    :i="item.i"
                    @resize="resizeEvent"
                    @move="moveEvent"
                    @resized="resizedEvent"
                    @moved="movedEvent"
                    style="background-color:#f2f2f2">
                    <h2>这是一个可拖拽弹框</h2>
                        <p>Something...</p>
                        <p>Something...</p>
                        <p>Something...</p>
                    <Button type="primary">确定</Button>
                    <Button type="primary">关闭</Button>
              <!--{{item.i}}-->
          </grid-item>
      </grid-layout>
    </div>
  </div>
</template>

<script>
import VueGridLayout from 'vue-grid-layout'
var testLayout = [
	    {"x":2,"y":2,"w":2,"h":2,"i":"0"},
	];
  var GridLayout = VueGridLayout.GridLayout;
	var GridItem = VueGridLayout.GridItem;
  export default {
     components: {
	        GridLayout,
	        GridItem,
	    },
    name: 'hello',
    data() {
      return {
         layout: testLayout,
         modal4:true,
      }
    },
    methods: {
      moveEvent: function(i, newX, newY){
        console.log("MOVE i=" + i + ", X=" + newX + ", Y=" + newY);
      },
      resizeEvent: function(i, newH, newW){
        console.log("RESIZE i=" + i + ", H=" + newH + ", W=" + newW);
      },
      movedEvent: function(i, newX, newY){
        console.log("MOVED i=" + i + ", X=" + newX + ", Y=" + newY);
      },
      /**
     * 
     * @param i the item id/index
     * @param newH new height in grid rows 
     * @param newW new width in grid columns
     * @param newHPx new height in pixels
     * @param newWPx new width in pixels
     * 
     */
      resizedEvent: function(i, newH, newW, newHPx, newWPx){
          console.log("RESIZED i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>-->
