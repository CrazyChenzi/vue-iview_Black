<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}" >
        <Row type="flex" :style="{height:heights-2+'px'}">
            <i-col :span="spanLeft" class="layout-menu-left">
                <Menu :active-name="$router.currentRoute.path" theme="dark" width="auto" :open-names="openName" @on-select="selectionMenu" accordion>
                    <div class="layout-logo-left"></div>
                    <Submenu :name="menu.key" v-for="(menu,index) in menuList" :key="index">
                        <template slot="title">
                            <Icon type="ios-paper" :size="iconSize"></Icon>
                            <span>{{menu.temName}}</span>
                        </template>

                        <Menu-item :name="tem.key" v-for="(tem,index) in menu.temList" :key="index" v-if="tem.title === ''">
                            <Icon type="ios-navigate" :size="iconSize"></Icon>
                            <span>{{tem.name}}</span>
                        </Menu-item>
                        <Menu-group :title="tem.title" v-for="(tem,index) in menu.temList" :key="index" v-if="tem.title !== ''">
                           <Menu-item :name="tem.key">
                             <Icon type="ios-navigate" :size="iconSize"></Icon>
                             <span>{{tem.name}}</span>
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
    </div>
</template>
<script>
    import dateformat from '../../filters/dateFormat'
    import mock from 'mockjs'
    import loading from '../../components/spin/spin.vue'
    const menuItems = () => (
      [
        {
          temName: '首页',
          key:'1',
          temList:[
            {
              title:'',
              name:'echarts图标',
              key:'/main/echarts',
            },
            {
              title:'',
              name:'table表格',
              key:'/main/table',
            },
            {
              title:'',
              name:'自定义控制时间',
              key:'/main/dateDemo',
            }
          ]
        },
        {
          temName: '组件/自定义指令',
          key:'2',
          temList:[
            {
              title:'',
              name:'可拖拽弹框',
              key:'/main/dispace',
            },
            {
              title:'',
              name:'可拖拽弹框2',
              key:'/main/dispaceTwo',
            }
          ]
        },
        {
          temName: '统计分析',
          key:'3',
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
                heights: document.documentElement.clientHeight,
                widths: document.documentElement.clientWidth,
                menuList: menuItems(),
                openName: [],
                breadList: [],
                transitionIf: true,
            }
        },
        computed: {
            iconSize () {
                return this.spanLeft === 5 ? 14 : 24;
            }
        },
        components: {loading},
        created(){
          localStorage.removeItem("load");
          this.getMenuFixed(this.$router.currentRoute.path);
        },
        mounted(){
          setTimeout(() => {
            this.$refs.spin.show = false;
            this.transitionIf = this.$refs.spin.show;
          }, 2000);
          this.heights = document.documentElement.clientHeight;
          window.onresize = () => {
    				return(() => {
    					this.heights = document.documentElement.clientHeight;
    					if(document.documentElement.clientWidth > 1360) {
    						this.widths = document.documentElement.clientWidth;
    					} else {
    						this.widths = 170;
    					}
    				})()
    			}
            window.onload = () => {
                return(() => {
                    this.heights = document.documentElement.clientHeight;
                    if(document.documentElement.clientWidth > 1360) {
                        this.widths = document.documentElement.clientWidth;
                    } else {
                        this.widths = 170;
                    }
                })()
            }
          // 使用 Mock
          var Mock = require('mockjs')
          var data = Mock.mock({
              // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
              'list|1-10': [{
                  // 属性 id 是一个自增数，起始值为 1，每次增 1
                  'id|+1': 1
              }]
          })
          // 输出结果
          // console.log(JSON.stringify(data, null, 4))
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 5) {
                    this.spanLeft = 3;
                    this.spanRight = 21;
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
<style scoped>
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
