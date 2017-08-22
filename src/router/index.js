import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello'

const Login = resolve => require(['@/views/login/login.vue'], resolve)
const Main = resolve => require(['@/views/main/main.vue'], resolve)
const Tree = resolve => require(['@/views/tree/tree.vue'], resolve)
const Upload = resolve => require(['@/views/upload/upload.vue'], resolve)
const Table = resolve => require(['@/views/table/table.vue'], resolve)
const Dispace = resolve => require(['@/views/dispace/dispace.vue'], resolve)
const DateDemo = resolve => require(['@/views/dateDemo/dateDemo.vue'], resolve)
const EchartsDemo = resolve => require(['@/views/echartsDemo/echarts.vue'], resolve)

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Login },  //登录界面！
    { path: '/hello', component: Hello },  //登录界面！
    {
      path: '/main', component: Main,
      children: [
        { path: 'echarts', component: EchartsDemo }, //图表!
        { path: 'dateDemo', component: DateDemo }, //时间！
        { path: 'tree', component: Tree }, //树！
        { path: 'upload', component: Upload }, //上传！
        { path: 'table', component: Table }, //表格！
        { path: 'dispace', component: Dispace }, //可拖拽弹框！
      ]
    }, //首界面！
  ]
})
