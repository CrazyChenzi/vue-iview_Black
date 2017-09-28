<template>
  <div class="pan-item" :style="{zIndex:zIndex,height:height,width:width}">
		<div class="pan-info">
			<div class="pan-info-roles-container">
				<slot></slot>
			</div>
		</div>
		<img class="pan-thumb" :src="image">
	</div>
</template>
<script>
  export default {
    name: 'PanThumb',
    props: {
      image: {
        type: String,
        required: true
      },
      zIndex: {
        type: Number,
        default: 100
      },
      width: {
        type: String,
        default: '150px'
      },
      height: {
        type: String,
        default: '150px'
      }
    }
  }
</script>
<style scoped>
  .pan-item {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: inline-block;/*inline:行内元素    inline-block:行内块元素     block:块元素*/
    position: relative;/*定位   相对定位   子元素若absolute则相对最近含relative的元素定位，若没有则相对body定位*/
    cursor: default;/*鼠标指针样式：default(默认) pointer(小手)*/
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);/*阴影     参数(x轴,y轴,阴影距离,阴影颜色)*/
  }

  .pan-info-roles-container {
    padding: 20px;
    text-align: center;
  }

  .pan-thumb {
    width: 100%;
    height: 100%;
    background-size: 100%;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;/*绝对定位，父元素pan-item relative*/
    transform-origin: 95% 40%;/*2d、3d转换 transform-origin改变元素的位置（x轴，y轴，z轴）*/
    transition: all 0.3s ease-in-out;/*过渡      参数：（所有属性  速度   速度曲线   延迟）*/
  }

  .pan-thumb:after {
    content: '';/*必写项，没有内容就是空字符串*/
    width: 8px;
    height: 8px;
    position: absolute;
    top: 40%;
    left: 95%;
    border-radius: 50%;
    margin: -4px 0 0 -4px;/*(上 右  下  左)*/
    /* *gradient：渐变   linear-gradient：线性渐变   radial-gradient：径向渐变
        径向渐变参数：(方式[椭圆ellipse 圆circle] , 位置  , 开始颜色 , 结束颜色)
    * */
    background: radial-gradient(ellipse at center, rgba(14, 14, 14, 1) 0%, rgba(125, 126, 125, 1) 100%);
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.9);
  }

  .pan-info {
    position: absolute;
    width: inherit;/*继承父元素*/
    height: inherit;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: inset 0 0 0 5px rgba(0, 0, 0, 0.05);
  }

  .pan-info h3 {
    color: #fff;
    text-transform: uppercase;/*文本大小写  uppercase大写    lowercase小写   capitalize大写开头    none默认*/
    position: relative;
    letter-spacing: 2px;/*字符间距(英文)     word-spacing:字间距(中文)*/
    font-size: 18px;
    margin: 0 60px;
    padding: 22px 0 0 0;
    height: 85px;
    font-family: 'Open Sans', Arial, sans-serif;/*字体*/
    text-shadow: 0 0 1px #fff, 0 1px 2px rgba(0, 0, 0, 0.3);/*文字阴影用法和盒阴影类似*/
  }

  .pan-info p {
    color: #fff;
    padding: 10px 5px;
    font-style: italic;/*字体样式  斜体*/
    margin: 0 30px;
    font-size: 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
  }

  .pan-info p a {
    display: block;
    color: #333;
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    color: #fff;
    font-style: normal;
    font-weight: 700;/*字体粗细  400 等同于 normal，而 700 等同于 bold。*/
    text-transform: uppercase;
    font-size: 9px;
    letter-spacing: 1px;
    padding-top: 24px;
    margin: 7px auto 0;
    font-family: 'Open Sans', Arial, sans-serif;
    opacity: 0;
    transition: transform 0.3s ease-in-out 0.2s, opacity 0.3s ease-in-out 0.2s, background 0.2s linear 0s;
    transform: translateX(60px) rotate(90deg);/*2d转换  x轴移60px  旋转90度*/
  }

  .pan-info p a:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  .pan-item:hover .pan-thumb {
    transform: rotate(-110deg);
  }

  .pan-item:hover .pan-info p a {
    opacity: 1;
    transform: translateX(0px) rotate(0deg);
  }
</style>
