<template>
	<div class="layout" :class="{'layout-hide-text': spanLeft < 5}" >
		<div class="topMenu">
			<Menu mode="horizontal" theme="dark" active-name="1">
				<div class="layout-logo"><div style="text-align:center; color: #fff; margin-top: -15px"> &copy; Black_晨 </div></div>
				<div class="layout-nav">
					<MenuItem name="1">
						<Icon type="ios-navigate"></Icon>
						导航一
					</MenuItem>
					<MenuItem name="2">
						<Icon type="ios-keypad"></Icon>
						导航二
					</MenuItem>
					<MenuItem name="3">
						<Icon type="ios-analytics"></Icon>
						导航三
					</MenuItem>
					<MenuItem name="4">
						<Icon type="ios-paper"></Icon>
						导航四
					</MenuItem>
				</div>
				<div class="topMenu_avatar">
					<Badge count="1">
						<Avatar style="color: #f56a00;background-color: #fde3cf">U</Avatar>
					</Badge>
				</div>
				<Dropdown trigger="click" class="drop" @on-click="dropClick">
					<a href="javascript:void(0)">
							设置
							<Icon type="arrow-down-b"></Icon>
					</a>
					<DropdownMenu slot="list">
							<DropdownItem>系统设置</DropdownItem>
							<DropdownItem name="color">切换主题</DropdownItem>
							<DropdownItem name="exit">退出</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</Menu>
		</div>
		<Row type="flex" :style="{height:heights-2+'px'}">
			<i-col :span="spanLeft" class="layout-menu-left">
				<Menu :active-name="$router.currentRoute.path" theme="dark" width="auto" :open-names="openName" @on-select="selectionMenu" accordion>
					<Submenu :name="menu.key" v-for="(menu,index) in menuList" :key="index">
						<template slot="title">
							<Tooltip :content="menu.temName" placement="right" v-if="spanLeft < 5">
								<Icon :type="menu.icon" :size="iconSize"></Icon>
							</Tooltip>
							<Icon :type="menu.icon" :size="iconSize" v-else></Icon>
							<span class="layout-text">{{menu.temName}}</span>
						</template>
						<Menu-item :name="tem.key" v-for="(tem,index) in menu.temList" :key="index" v-if="tem.title === ''">
							<Tooltip :content="tem.name" placement="right" v-if="spanLeft < 5">
								<Icon :type="tem.icon" :size="iconSize"></Icon>
							</Tooltip>
							<Icon :type="tem.icon" :size="iconSize" v-else></Icon>
							<span class="layout-text">{{tem.name}}</span>
						</Menu-item>
						<Menu-group :title="tem.title" v-for="(tem,index) in menu.temList" :key="index" v-if="tem.title !== ''">
							<Menu-item :name="tem.key">
								<Tooltip :content="tem.name" placement="right" v-if="spanLeft < 5">
									<Icon :type="tem.icon" :size="iconSize"></Icon>
								</Tooltip>
								<Icon :type="tem.icon" :size="iconSize" v-else></Icon>
								<span class="layout-text">{{tem.name}}</span>
							</Menu-item>
						</Menu-group>
					</Submenu>
				</Menu>
			</i-col>
			<i-col :span="spanRight">
				<div class="layout-header">
					<i-button type="text" @click="toggleClick">
						<Icon type="navicon" size="32"></Icon>
					</i-button>
				</div>
				<div class="layout-breadcrumb">
					<Breadcrumb>
						<Breadcrumb-item :href="item.breadHref" v-for="(item, index) in breadList" :key="index">{{item.breadName}}</Breadcrumb-item>
					</Breadcrumb>
				</div>
				<div class="layout-content">
					<div class="layout-content-main">
						<loading ref="spin"></loading>
						<transition name="slide-fade">
							<p v-if="!transitionIf">
								<router-view :style="{height:heights-200+'px'}"></router-view>
							</p>
						</transition>
					</div>
				</div>
				<div class="layout-copy">
					{{new Date() | dateformat}} &copy; Black_晨
				</div>
			</i-col>
		</Row>
		<Modal v-model="colorModel" @on-cancel="closeColorChange">
			<p slot="header" style="color:#f60;text-align:center">
				<Icon type="android-color-palette"></Icon>
				<span>主题切换</span>
			</p>
			<div style="padding-top: 20px">
				<i-switch size="large" true-value="1" false-value="0" v-model="colorSwitch">
					<span slot="open">切换</span>
					<span slot="close">原生</span>
				</i-switch>
			</div>
			<div slot="footer">
				<Button type="ghost" size="large"  :loading="color_loading" @click="closeColorChange">取消</Button>
				<Button type="primary" size="large"  :loading="color_loading" @click="colorChange">确定</Button>
			</div>
    </Modal>
	</div>
</template>
<script>
	import { mapMutations } from 'vuex'
	import dateformat from '../../filters/dateFormat'
	import loading from '../../components/spin/spin.vue'
	const menuItems = () => (
		[
			{
				temName: 'main',
				icon: 'home',
				key:'1',
				temList:[
					{
						title:'',
						name:'首页',
						key:'/main/home',
						icon: 'home'
					},
					{
						title:'',
						name:'echarts图表',
						key:'/main/echarts',
						icon: 'ios-photos'
					},
					{
						title:'',
						name:'table表格',
						key:'/main/table',
						icon: 'ios-grid-view-outline'
					},
					{
						title:'',
						name:'自定义控制时间',
						key:'/main/dateDemo',
						icon: 'clock'
					},
					{
						title:'',
						name:'手动控制上传',
						key:'/main/upload',
						icon: 'ios-cloud-upload'
					},
					{
						title:'',
						name:'树形组件',
						key:'/main/tree',
						icon: 'levels'
					}
				]
			},
			{
				temName: '组件/自定义指令',
				key:'2',
				icon: 'usb',
				temList:[
					{
						title:'',
						name:'可拖拽弹框',
						key:'/main/drag',
						icon:'arrow-move'
					},
					{
						title: '',
						name: 'table slot header',
						key: '/main/tableSlotHeader',
						icon: 'ios-grid-view-outline'
					},
					{
						title: '',
						name: '自定义按钮',
						key: '/main/kbutton',
						icon: 'minus-round'
					}
					// {
					//   title:'',
					//   name:'可拖拽弹框2',
					//   key:'/main/dispaceTwo',
					// }
				]
			},
			{
				temName: '统计分析',
				key:'3',
				icon: 'ios-pricetag',
				temList:[
					{
						title:'',
						name:'国际化',
						key:'/main/i18N',
					},
					{
						title:'说明',
						name:'用户管理二',
						key:'3-2',
					}
				]
			}
		]
	)
	export default {
			filters: {
				dateformat
			},
			data () {
				return {
					spanLeft: 5,
					spanRight: 19,
					heights: document.documentElement.clientHeight -60,
					widths: document.documentElement.clientWidth,
					menuList: menuItems(),
					openName: [],
					breadList: [],
					transitionIf: true,
					color_loading: false,
					colorModel: false,
					colorSwitch: 0,
				}
			},
			computed: {
				iconSize () {
					return this.spanLeft === 5 ? 14 : 20;
				}
			},
			components: {loading},
			created(){
				localStorage.removeItem("load");
				this.getMenuFixed(this.$router.currentRoute.path);
			},
			mounted(){
				console.log(localStorage.colorChange)
				if(localStorage.colorChange === "true") {
					localStorage.colorChange = false;
					this.$Notice.success({
						title: '切换主题成功'
					});
				}
				this.colorSwitch = localStorage.color; 
				setTimeout(() => {
					this.$refs.spin.show = false;
					this.transitionIf = this.$refs.spin.show;
				}, 1000);
				this.heights = document.documentElement.clientHeight - 60;
				window.onresize = () => {
					return(() => {
						this.heights = document.documentElement.clientHeight - 60;
						if(document.documentElement.clientWidth > 1360) {
								this.widths = document.documentElement.clientWidth;
						} else {
								this.widths = 170;
						}
						this.SET_HEIGHTS(this.heights);
						this.SET_WIDTHS(this.widths);
					})()
				}
				window.onload = () => {
					return(() => {
						this.heights = document.documentElement.clientHeight - 60;
						this.widths = document.documentElement.clientWidth;
						this.SET_HEIGHTS(this.heights);
						this.SET_WIDTHS(this.widths);
					})()
				}
			},
			methods: {
				...mapMutations([
					'SET_HEIGHTS', 'SET_WIDTHS'
				]),
				dropClick : function (name) {
					switch(name) {
						case 'color' : 
							this.colorModel = true;
							break;
						case 'exit' :
							this.$router.push({path: '/'});
							localStorage.removeItem("loginName");
							localStorage.removeItem("loginPwd");
							// localStorage.removeItem("color");
					}
				},
				colorChange : function () {
					if(this.colorSwitch === localStorage.color) {
						this.$Modal.confirm({
							title: "警告！！！",
							content: "还没有切换主题，确定不进行切换？",
							okText: 'OK',
							cancelText: 'BACK',
							onOk: () => {
									this.closeColorChange();
							},
							onCancel: () => {
									
							}
						});
					} else {
						localStorage.color = this.colorSwitch;
						localStorage.colorChange = true;
						this.closeColorChange();
						location.reload();
					}
				},
				closeColorChange : function () {
					this.colorModel = false;
				},
				toggleClick () {
					if (this.spanLeft === 5) {
						this.spanLeft = 1;
						this.spanRight = 23;
					} else {
						this.spanLeft = 5;
						this.spanRight = 19;
					}
				},
				selectionMenu : function(name) {
					this.$refs.spin.show = true;
					this.transitionIf = true;
					setTimeout(() => {
						this.$refs.spin.show = false;
						this.transitionIf = this.$refs.spin.show;
					}, 2000);
					this.$router.push({path:name});
					this.getMenuFixed(name);
				},
				getMenuFixed : function(name) {
					this.breadList = [];
					menuItems().forEach((menu, index) => {
						menu.temList.forEach((item, index) => {
							if(item.key === name){
								let breadF = {
									breadName: menu.temName,
									breadHref: ''
								};
								let breadS = {
									breadName: item.name,
									breadHref: item.key
								};
								this.openName.push(menu.key);
								this.breadList.push(breadF);
								this.breadList.push(breadS);
							}
						})
					})
				}
			}
	}
</script>
<style lang="scss" scoped>
		$color_fff: #fff;
		.drop{
			color: $color_fff;
			margin-left: 20px; 
			float:right;
		}
		.drop a{
			color: $color_fff;
		}
		.drop li{
			color:$color_fff
		}
		.drop /deep/ .ivu-select-dropdown {
			background: #353e44
		}
		.drop /deep/ .ivu-dropdown-item:hover {
			background: #464c5b
		}
		.topMenu /deep/ .ivu-menu-dark{
			background:#353e44
		}
		.topMenu_avatar{
			float: right;
			position: relative;
			right: 90px;
		}
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #464b56;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
    .layout /deep/ .ivu-col-span-1{
    	width: 5%;
    }
    .layout /deep/ .ivu-col-span-23 {
    	width: 95%;
    }
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
      transition: all .3s ease;
    }
    .slide-fade-leave-active {
      transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
      transform: translateX(10px);
      opacity: 0;
    }
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
</style>
