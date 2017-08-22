<template>
  <div>
    <Row>
      <Col span="8">
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
          console.log('2222');
          this.$refs.deptree.$emit('checked',this.$refs.deptree.getCheckedNodes());//.updateData();
        },
        deep: true
      }
    },
    mounted(){
      console.log(this.baseData)
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
