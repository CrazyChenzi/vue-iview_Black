<template>
  <div>
    <Table highlight-row :columns="columns3" :data="data1" @on-row-click="" size="small"></Table>
    <!-- <inputVal :inputValue="inputValue"></inputVal> -->
    <!-- 覆盖移动终端:
    {{ 3731700153 |  NumberSeparator }}
    <h2 v-time></h2> -->
  </div>
</template>
<script>
  // import NumberSeparator from '../filters/number-separator';
  // import Time from '../directives/time';
  // import inputVal from '../components/input.vue'
  export default {
    // filters: {
    //   NumberSeparator
    // },
    // directives: {
    //   time: Time
    // },
    data () {
      return {
        columns3: [
          {
            type: 'index',
            width: 60,
            align: 'center'
          },
          {
            title: '姓名',
            key: 'name',
            render: (h, params) => {
              let self = this;
              return h('div', [
                h('Input', {
                  props: {
                    placeholder: "请输入....",
                    value:params.row.name
                  },
                  'on': {
                      'on-blur':() => {
                        self.data1[params.index].name = event.target.value
                      }
                  },
                }),
              ]);
            }
          },
          {
            title: '年龄',
            key: 'age',
            render: (h, params) => {
              let self = this;
                return h('Select',{
                      props:{
                        value:params.row.age
                      },
                      on :{
                        'on-change' : (val) => {
                          self.data1[params.index].age = val;
                        }
                      }
                    },self.list.map(item => {
                      return h('Option',{
                        props:{
                          value: item.value,
                        }
                      },item.name)
                    })
                  )
              }
          },
          {
            title: '性别',
            key: 'sex',
            render: (h, params) => {
              let self = this;
                return h('Select',{
                      props:{
                        value:params.row.sex,
                        multiple:true,
                      },
                      on :{
                        'on-change' : (val) => {
                          self.data1[params.index].sex = val;
                        }
                      }
                    },self.lists.map(item => {
                      return h('Option',{
                        props:{
                          value: item.value,
                        }
                      },item.name)
                    })
                  )
              }
          },
          {
            title: '地址',
            key: 'address'
          }
        ],
        data1: [
          {
            name: '王小明',
            age: 18,
            sex: [1,2],
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            sex: [1,2],
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            sex: [1,2],
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            sex: [1,2],
            address: '深圳市南山区深南大道'
          }
        ],
        list:[
          {name:'王小明',value:18},
          {name:'张小刚',value:25},
          {name:'李小红',value:30},
          {name:'周小伟',value:26},
        ],
        lists:[
          {name:'王小明',value:1},
          {name:'张小刚',value:2},
          {name:'李小红',value:3},
          {name:'周小伟',value:4},
        ],
        rowData:{},
        // inputValue:{
        //     value:''
        // },
      }
    },
    // components: {
    //   inputVal,
    // },
    watch:{
    },
    methods:{
    }
  }
</script>
<style>
</style>
