<!-- <template>
  <div>
    <Row>
      <Col span="8" class="menuCard">
         <Tree :data="baseData" ref="deptree" show-checkbox></Tree>
      </Col>
      <Col span="8">
      <Button @click="pushnode" type="primary" size="small">新增</Button>
      </Col>
    </Row>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        baseData: [
          {
            id:'1-1',
            pid:'0',
            expand: true,
            title: 'parent 1',
            children: [{
              id:'2-1',
              pid:'1-1',
              title: 'parent 1-0',
              expand: true,
              children: [{
                id:'3-1',
                pid:'2-1',
                title: 'leaf-1-1',
                expand: false,
                children:[],
              }, {
                id:'3-2',
                pid:'2-1',
                title: 'leaf-2',
                expand: false,
              }]
            }, {
              id:'2-2',
              pid:'1-1',
              title: 'parent 1-1',
              expand: true,
              checked: true,
              children: [{
                id:'3-3',
                pid:'2-2',
                title: 'leaf-3',
              }]
            }]
          }
        ]
      }
    },
    watch:{
      baseData: {
        handler:function(newVal, oldVal){
          this.$refs.deptree.$emit('checked',this.$refs.deptree.getCheckedNodes());//.updateData();
        },
        deep: true
      }
    },
    mounted(){
    },
    methods: {
      getMenuNode(menus, id) {
        //1.第一层 root 深度遍历整个JSON
        for (var i = 0; i < menus.length; i++) {
          var obj = menus[i];
          if (obj.id == id) {
            return obj;
          }else{
            obj.children = obj.children||[];
            if(obj.children.length==0)
              continue;
            return this.getMenuNode(obj.children, id);
          }
        }
        //return node;
      },
      pushnode() {
        console.log(1);
        var node =this.getMenuNode(this.baseData,'3-1');
        console.log(node);
        node = node||{};
        node.children = node.children || [];
        var obj = { id: '3-2-3', pid: '3-1', title: 'leaf-2',checked: false };
        node.children.push(obj);
        node.expand=true;
        console.log(this.baseData);
      }
    }
  }
</script>
<style scoped>
.menuCard >>> .ivu-tree {
padding-left: 10px;
}
.menuCard >>> .ivu-tree ul {
font-size: 16px;
}
.menuCard >>> .ivu-tree-arrow {
/*font-size: 19px;*/
}
</style> -->

<template>
   <div >
      <el-tree
        :data="data2"
        :props="defaultProps"
        show-checkbox
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
        :render-content="renderContent"
        @check-change="changeTree"
        ref="tree">
      </el-tree>
      <Button @click="save">点击</Button>
      <Button @click="getTree">递归</Button>
   </div>
</template>
<script>
  let id = 1000;
  export default {
    data() {
      return {
        data2: [{
          id: 1,
          label: '一级 1',
          ARRAY: [
             {
                name: '新增',
                checked: false
             },
             {
                name: '修改',
                checked: false
             },
             {
                name: '删除',
                checked: false
             }
          ],
          children: [{
            id: 4,
            label: '二级 1-1',
            ARRAY: [
               {
                  name: '新增',
                  checked: false
               },
               {
                  name: '修改',
                  checked: false
               },
               {
                  name: '删除',
                  checked: true
               }
            ],
          }]
        }, {
          id: 2,
          label: '一级 2',
          ARRAY: [],
          children: [{
            id: 5,
            label: '二级 2-1',
            ARRAY: []
          }, {
            id: 6,
            label: '二级 2-2',
            ARRAY: []
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
       },
      }
    },

    methods: {
      append(store, data) {
        store.append({ id: id++, label: 'testtest', children: [] }, data);
      },

      remove(store, data) {
        store.remove(data);
      },
      save(){
         console.log(this.data2)
      },
      getTree(){

      },
      changeTree(dom,selection,children){
         console.log(this.$refs.tree.getCheckedNodes())
         // console.log(selection,"selection")
         // console.log(dom,"dom")
      },

      renderContent(h, { node, data, store }) {
         return h('span',[
            h('span',{

            },node.label),
            h('span', [
               data.ARRAY.map((item, index) => {
                  return h('el-checkbox', {
                     props:{
                        checked: item.checked
                     },
                     style:{
                        marginRight: '20px',
                        float: 'right'
                     },
                     on: {
                        change : (event) => {
                           item.checked = !item.checked;
                        }
                     }
                  },item.name)
               })

            ])
         ])
      }
    }
  };
</script>
<style>
   .el-tree-node__content{
         height: 40px;
   }
</style>
