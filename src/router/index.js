import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello'
import Tree from '@/views/tree.vue'
import Upload from '@/views/upload.vue'
import Table from '@/views/table.vue'
import Dispace from '@/views/dispace.vue'
import DateDemo from '@/views/dateDemo.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/tree',
      name: 'Tree',
      component: Tree
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    },
    {
          path: '/table',
          // name: 'Table',
          component: Table
    },
    {
          path: '/dispace',
          // name: 'Table',
          component: Dispace
    },
    {
          path: '/dateDemo',
          // name: 'Table',
          component: DateDemo
    },
  ]
})
