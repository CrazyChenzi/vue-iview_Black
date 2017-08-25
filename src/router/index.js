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
const NotFound = resolve => require(['@/views/404/404.vue'], resolve)
const Test = resolve => require(['@/views/test.vue'], resolve)

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '*', component:NotFound},
    { path: '/test', component:Test},
    { path: '/', component: Login },  //登录界面！
    { path: '/hello', meta: { requireAuth: true}, component: Hello },  //登录界面！
    {
      path: '/main', meta: { requireAuth: true}, component: Main,
      children: [
        { path: 'echarts', meta: { requireAuth: true}, component: EchartsDemo }, //图表!
        { path: 'dateDemo', meta: { requireAuth: true}, component: DateDemo }, //时间！
        { path: 'tree', meta: { requireAuth: true}, component: Tree }, //树！
        { path: 'upload', meta: { requireAuth: true}, component: Upload }, //上传！
        { path: 'table', meta: { requireAuth: true}, component: Table }, //表格！
        { path: 'dispace', meta: { requireAuth: true}, component: Dispace }, //可拖拽弹框！
      ]
    }, //首界面！
  ]
})
