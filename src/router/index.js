import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello'

const Login = resolve => require(['@/views/login/login.vue'], resolve)
const Home = resolve => require(['@/views/home/home.vue'], resolve)
const Main = resolve => require(['@/views/main/main.vue'], resolve)
const Tree = resolve => require(['@/views/tree/tree.vue'], resolve)
const Upload = resolve => require(['@/views/upload/upload.vue'], resolve)
const Table = resolve => require(['@/views/table/table.vue'], resolve)
const DateDemo = resolve => require(['@/views/dateDemo/dateDemo.vue'], resolve)
const EchartsDemo = resolve => require(['@/views/echartsDemo/echarts.vue'], resolve)
const NotFound = resolve => require(['@/views/404/404.vue'], resolve)
// const I18N = resolve => require(['@/views/locale/locale.vue'], resolve)

/** 组件/组定义指令 */
const TableSlotHeader = resolve => require(['@/views/components/table/tableSlotHeader.vue'], resolve)
const Drag = resolve => require(['@/views/components/drag/drag.vue'], resolve)
const KButton = resolve => require(['@/views/components/KButton/KButton.vue'], resolve)
// const DispaceTwo = resolve => require(['@/views/dispace/dispaceTwo.vue'], resolve)

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    { path: '*', component:NotFound},
    { path: '/', component: Login },  //登录界面！
    { path: '/hello', meta: { requireAuth: true}, component: Hello },  //登录界面！
    {
      path: '/main', meta: { requireAuth: true}, component: Main,
      children: [
        { path: 'home', meta: { requireAuth: true}, component: Home }, //首页!
        { path: 'echarts', meta: { requireAuth: true}, component: EchartsDemo }, //图表!
        { path: 'dateDemo', meta: { requireAuth: true}, component: DateDemo }, //时间！
        { path: 'tree', meta: { requireAuth: true}, component: Tree }, //树！
        { path: 'upload', meta: { requireAuth: true}, component: Upload }, //上传！
        { path: 'table', meta: { requireAuth: true}, component: Table }, //表格！

        /** 组件/自定义指令 */
        { path: 'tableSlotHeader', meta: { requireAuth: true}, component: TableSlotHeader }, //表格slot header！
        { path: 'drag', meta: { requireAuth: true}, component: Drag }, //可拖拽弹框！
        { path: 'kbutton', meta: { requireAuth: true}, component: KButton }, //自定义按钮！
        // { path: 'dispaceTwo', meta: { requireAuth: true}, component: DispaceTwo }, //可拖拽弹框！
        // { path: 'i18N', meta: { requireAuth: true}, component: I18N }, //国际化！
      ]
    }, //首界面！
  ]
})
