<template>
  <div>
    <Modal title="查看图片" v-model="visible">
        <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
    </Modal>
     <Table highlight-row :columns="columns3" :data="data1" :row-class-name="setIndex_table" @on-selection-change="selectionTable" @on-select-all="selectionTableAll" 
     size="small" ref="table"></Table>
  </div>
</template>
<script>
  import expandRow from '@/components/tableExpend/tableExpend.vue'
  import table_mock from './table_mock.js'
  export default {
    components: { expandRow },
    data () {
      return {
        columns3: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '序号',
            type: 'index',
            width: 80,
            align: 'center',
          },
          {
            type: 'expand',
            width: 50,
            render: (h, params) => {
              return h(expandRow, {
                props: {
                  row: params.row
                }
              })
            }
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
                h('p',{
                  style: {
                    color: 'red',
                    display: self.data1[params.index].name === "" ? '' : 'none'
                  }
                },'请输入你的名字....')
              ]);
            }
          },
          {
            title: '年龄',
            key: 'age',
            sortable: true,
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
                    },self.ageList.map(item => {
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
                    },self.sexList.map(item => {
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
            title: 'switch开关slot实现',
            key: 'switchSlot', 
            render: (h, params) => {
              let self = this;
              return h('i-switch',{
                props: {
                  size: 'large',
                  value: params.row.switchSlot
                },
                on: {
                  'on-change' : (val) =>{
                    self.data1[params.index].switchSlot = val;
                  }
                }
              },self.switchList.map(item => {
                return h('span',{
                  slot:item.slot
                },item.name)
              }))
            }
          },
          {
            title: 'upload上传',
            key: 'switchSlot',
            render: (h, params) => {
              let self = this;
              let uploadIconList = [{}]
              return h('span', [
                h('span', {

                },self.uploadList.map((item, index) => {
                    return (
                      <div class="demo-upload-list" style="vertical-align: text-bottom;">
                        {item.status === 'finished' ? 
                          <span>
                            <img src={item.url} />
                            <div class="demo-upload-list-cover">
                              <i class="ivu-icon ivu-icon-ios-eye-outline" on-click={() => self.handleView(item.name)}></i>
                              <i class="ivu-icon ivu-icon-ios-trash-outline" on-click={() => self.handleRemove(item, index)}></i>
                            </div>
                          </span> : 
                          <span>
                            {
                              item.showProgress ? <i-progress  percent={item.percentage} hide-info></i-progress> : ''
                            }
                          </span>
                        } 
                      </div>
                    )
                  })
                ),
                h('Upload', {
                  props: {
                    action: '//jsonplaceholder.typicode.com/posts/',
                    type: 'drag',
                    multiple: true,
                    'show-upload-list': false,
                    'on-success': self.handleSuccess,
                    'before-upload': self.handleBeforeUpload,
                    'on-exceeded-size': self.handleMaxSize,
                    'on-format-error': self.handleFormatError,
                    'max-size': 2048,
                    format: ['jpg','jpeg','png'],
                    'default-file-list': self.defaultList
                  },
                  style: {
                    display: 'inline-block',
                    width: '58px',
                    'vertical-align': 'text-bottom'
                  },
                  ref: 'upload'
                },uploadIconList.map(item => {
                    return h('div',{
                      style: {
                        width: '58px',
                        height: '58px',
                        'line-height': '58px'
                      }
                    },uploadIconList.map(item => {
                        return h('icon',{
                          props:{
                            type: 'camera',
                            size: '20'
                          }
                        })
                      })
                    )
                  })
                )
              ])
            }
          }
        ],
        data1: [
        ],
        ageList:[
          {name:'20',value:20},
          {name:'21',value:21},
          {name:'22',value:22},
          {name:'23',value:23}
        ],
        sexList:[
          {name:'男',value:1},
          {name:'女',value:2}
        ],
        switchList:[
          {
            slot: 'open',
            name: '打开'
          },
          {
            slot: 'close',
            name: '关闭'
          }
        ],
        defaultList: [
          {
            'name': 'a42bdcc1178e62b4694c830f028db5c0',
            'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
          },
          {
            'name': 'bc7521e033abdd1e92222d733590f104',
            'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
          }
        ],
        imgName: '',
        visible: false,
        uploadList: [],
      }
    },
    watch:{
    },
    mounted () {
      this.uploadList = this.defaultList;
      this.$Notice.open({
          title: '关于upload render',
          desc: '因表格为多行  所以绑定需用二维数组  根据index绑定不同的upload上传fileList  故此在这只做说明   不做对应实例  要实现与表格data双向绑定也请参照之前实例自行修改',
          duration: 0
      });
      this.getMock();
    },
    methods:{
      //请求mock生成的假数据
      getMock : function () {
        this.axios.get("http://127.1.1.0:8080").then(res => {
          console.log(this.data1)
          console.log(res.data.array)
          this.data1 = res.data.array;
        }).catch(res => {
          console.log(res,"---")
        })
      },
      /**
        @table
        以下为table相关方法
       */
      //为表格添加自定义index
      setIndex_table : function (row, index) {
        this.data1[index].setIndex = index;
      },
      //单选
      selectionTable : function (selection) {
        // this.data1.forEach((dataItem, index) => {
        //   selection.forEach((item) => {
        //     if(dataItem.setIndex === item.setIndex) {
        //       dataItem._checked = true;
        //     }else{
        //       dataItem._checked = false;
        //     }
        //   })
        // })
        for(let i = 0; i < this.data1.length; i++) {
          for(let j = 0; j < selection.length; j++) {
            if(this.data1[i].setIndex === selection[j].setIndex) {
              this.data1[i]._checked = true;
              break;
            }else{
              this.data1[i]._checked = false;
            }
          }
        }
      },
      //多选
      selectionTableAll : function (selection) {
        
      },
      /**
        @upload
        以下为upload相关方法
       */
      handleView (name) {
        console.log(1)
        this.imgName = name;
        this.visible = true;
      },
      handleRemove (file, index) {
        this.defaultList.splice(index,1);
        // 从 upload 实例删除数据
        // const fileList = this.$refs.upload.fileList;
        // this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
      },
      handleSuccess (res, file) {
        // 因为上传过程为实例，这里模拟添加 url
        file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
        file.name = '7eb99afb9d5f317c912f08b5212fd69a';
      },
      handleFormatError (file) {
        this.$Notice.warning({
          title: '文件格式不正确',
          desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
        });
      },
      handleMaxSize (file) {
        this.$Notice.warning({
          title: '超出文件大小限制',
          desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
        });
      },
      handleBeforeUpload () {
        console.log(1)
        const check = this.uploadList.length < 5;
        if (!check) {
          this.$Notice.warning({
            title: '最多只能上传 5 张图片。'
          });
        }
        return check;
      }
    }
  }
</script>
<style>
    .demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>
