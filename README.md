# iview+elementui

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 效果展示

- 登录页面
![image](https://github.com/Blackloser/vue-iview_Black/tree/dev/githubImage/login.gif)

- 首页
![image](https://github.com/Blackloser/vue-iview_Black/tree/dev/githubImage/home.png)

- v-model绑定表格
![image](https://github.com/Blackloser/vue-iview_Black/tree/dev/githubImage/table.png)
![image](https://github.com/Blackloser/vue-iview_Black/tree/dev/githubImage/table.gif)

- 自定义控制不可选时间
![image](https://github.com/Blackloser/vue-iview_Black/tree/dev/githubImage/time.gif)

- 手动控制上传
![image](https://github.com/Blackloser/vue-iview_Black/tree/dev/githubImage/upload.gif)

- 按钮权限组件树
![image](https://github.com/Blackloser/vue-iview_Black/tree/dev/githubImage/tree.png)

# 项目布局

```
.
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── my-Theme                                    // 自定义主题  
├── nodeJS                                      // node服务... 未完善
├── src                                         // 源码目录
│   ├── assets                                  // 自定义内容
│   ├── components                              // 组件
│   │   ├── spin
│   │   │   ├── spin.vue                        // loading全局组件
│   │   ├── tableExpend
│   │   │   ├── tableExpend.vue                 // 表格expend组件
│   │   ├── deleteModel.vue                     // 全局删除弹框
│   │   ├── input.vue                           // input组件
│   ├── directives                              // 自定义指令
│   │   ├── time.js                             // 时间指令
│   ├── filters                                 // 过滤器
│   │   ├── dateFormat.js                       // 时间过滤器
│   │   ├── number-separator.js                 // 数字过滤器
│   ├── router
│   │   └── index.js                            // 路由配置
│   ├── views
│   │   ├── 404
│   │   │   ├── 404.vue                         // 404页面
│   │   ├── dateDemo
│   │   │   ├── dateDemo.vue                    // 自定义控制时间选择
│   │   ├── dispace
│   │   │   ├── dispace.vue                     // 可拖拽弹框
│   │   ├── echartsDemo
│   │   │   ├── echartsDemo.vue                 // echarts demo
│   │   ├── login
│   │   │   ├── login.vue                       // 登录
│   │   ├── main
│   │   │   ├── main.vue                        // 主界面
│   │   ├── table
│   │   │   ├── table_mock.js                   // 生成mock假数据
│   │   │   ├── table.vue                       // render函数生成upload select.... 实现v-model双向绑定 实现slot分发
│   │   │   ├── printTable.vue                  // 实现表格打印（记得连打印机）
│   │   │   ├── tableSlotHeader.vue             // 表格slot header 实现多级表头（需自己实现大多数原有样式）
│   │   ├── tree
│   │   │   ├── tree.vue                        // 基于ele树结构 可实现权限按钮的分配（iview树不友好  因此使用了ele）
│   │   ├── upload
│   │   │   ├── upload.vue                      // 实现手动上传（非官方提供的setTimeout假上传）
│   │   ├──App.vue                              // 页面入口文件
│   │   ├── main.js                             // 程序入口文件，加载各种公共组件
├── static                                      // 静态文件所存放目录
│   ├── img                                     // 首页  404 所需图片
│   ├── js                                      // 第三方静态js
│   │   ├──drag.js                              // 拖动js（有点bug，还未使用）
│   │   ├──mouseMove.css                        // 登录页特效css
│   │   ├──mouseMove.js                         // 登录页特效js
│   ├── mp4                                     // 404 所需动画
├── index.html                                  // 入口html文件                           
.
------------------
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
