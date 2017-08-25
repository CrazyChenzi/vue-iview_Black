
var params = {
	left: 0,
	top: 0,
	currentX: 0,
	currentY: 0,
	flag: false
};
var windowWidth = 0;
var windowHeight = 0;

//获取相关CSS属性 
var getCss = function (o,key){
	return o.currentStyle? o.currentStyle[key] : document.defaultView.getComputedStyle(o,false)[key]; 	
};
let drag = {
	//拖拽的实现
	startDrag : function(bar, target, ivu, callback){
		if(getCss(target, "left") !== "auto"){
			params.left = getCss(target, "left");
		}
		if(getCss(target, "top") !== "auto"){
			params.top = getCss(target, "top");
		}
		//o是移动对象
		bar.onmousedown = function(event){
			console.log("ok")
			params.flag = true;
			if(!event){
				event = window.event;
				//防止IE文字选中
				bar.onselectstart = function(){
					return false;
				}  
			}
			var e = event;
			params.currentX = e.clientX;
			params.currentY = e.clientY;
		};
		document.onmouseup = function(){
			params.flag = false;	
			if(getCss(target, "left") !== "auto"){
				params.left = getCss(target, "left");
			}
			if(getCss(target, "top") !== "auto"){
				params.top = getCss(target, "top");
			}
		};
		document.onmousemove = function(event){
			var e = event ? event: window.event;
			if(params.flag){
				var nowX = e.clientX, nowY = e.clientY;
				var disX = nowX - params.currentX, disY = nowY - params.currentY;
				if(ivu[0].offsetLeft <= 700) {
					if(parseInt(params.left) + disX > -ivu[0].offsetLeft && parseInt(params.left) + disX < (windowWidth-ivu[0].clientWidth)/2){
						target.style.left = parseInt(params.left) + disX + "px";
					}
				}else{
					if(parseInt(params.left) + disX > -ivu[0].offsetLeft && parseInt(params.left) + disX < (windowWidth-ivu[0].clientWidth)/2-ivu[0].offsetLeft+700){
						target.style.left = parseInt(params.left) + disX + "px";
					}
				}
				if(parseInt(params.top) + disY > -ivu[0].offsetTop && parseInt(params.top) + disY < windowHeight-ivu[0].clientHeight-ivu[0].offsetTop){
					target.style.top = parseInt(params.top) + disY + "px";
				}
				if (event.preventDefault) {
					event.preventDefault();
				}
				return false;
			}
			if (typeof callback == "function") {
				callback(parseInt(params.left) + disX, parseInt(params.top) + disY);
			}
		};
		window.onresize = () => {
			target.style.left  = 0;
			target.style.top  = 0;
			params = {
				left: 0,
				top: 0,
				currentX: 0,
				currentY: 0,
				flag: false
			}
			bar.onmousedown()
			return(() => {
				windowHeight = document.documentElement.clientHeight;
				windowWidth = document.documentElement.clientWidth;
			})()
		};
		window.onload = () => {
			console.log(2)
			return(() => {
				windowHeight = document.documentElement.clientHeight;
				windowWidth = document.documentElement.clientWidth;
			})()
		}	
	}, 
	
};
export default  drag