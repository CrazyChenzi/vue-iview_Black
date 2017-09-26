<template>
  <div class="table_slot">
    <Table :loading="loading" :columns="slotHeaderColumns" :data="slotHeaderData" :show-header="false" border>
      <div slot="header">
        <thead>
          <tr>
            <th colspan="2">
              <div class="ivu-table-cell">
                <span>1</span>
              </div>
            </th>
            <th colspan="2">
              <div class="ivu-table-cell">
                <span>2</span>
              </div>
            </th>
            <th colspan="3">
              <div class="ivu-table-cell">
                <span>3</span>
              </div>
            </th>
            <th rowspan="2">
              <div class="ivu-table-cell">
                <span>4</span>
              </div>
            </th>
          </tr>
          <tr>
            <th>
              <div class="ivu-table-cell">
                <span>1-1</span>
              </div>
            </th>
            <th>
              <div class="ivu-table-cell">
                <span>1-2</span>
              </div>
            </th>
            <th>
              <div class="ivu-table-cell">
                <span>2-1</span>
              </div>
            </th>
            <th>
              <div class="ivu-table-cell">
                <span>2-2</span>
              </div>
            </th>
            <th align="right">
              <div class="ivu-table-cell">
                <span>3-1</span>
              </div>
            </th>
            <th>
              <div class="ivu-table-cell">
                <span>3-2</span>
              </div>
            </th>
            <th>
              <div class="ivu-table-cell">
                <span>3-3</span>
              </div>
            </th>
          </tr>
        </thead> 
      </div>
    </Table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        loading: false,
        slotHeaderColumns: [{
            title: '1',
            key: 'name',
            // renderHeader(h, params) {
            //   return (
            //     <thead>
            //       <tr>
            //         <th colspan="2">
            //           <div class="ivu-table-cell">
            //             <span>客户姓名</span>
            //           </div>
            //         </th>
            //       </tr>
            //       <tr>
            //         <th>
            //           <div class="ivu-table-cell">
            //             <span>客户姓名</span>
            //           </div>
            //         </th>
            //         <th>
            //           <div class="ivu-table-cell">
            //             <span>客户姓名</span>
            //           </div>
            //         </th>
            //       </tr>
            //     </thead>
            //   )
            // },
          },
          {
            title: '2',
            key: 'age',
          },
          {
            title: '3',
            key: 'address',
          },
          {
            title: '4',
            key: 'address',
          },
          {
            title: '5',
            key: 'address',
          },
          {
            title: '6',
            key: 'address',
          },
          {
            title: '7',
            key: 'address',
          },
          {
            title: '8',
            key: 'address',
          }
        ],
        slotHeaderData: [{
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          }
        ]
      }
    },
    methods: {
      render_header(h, params) {
        return h('div',{

        },23232)
        console.log(params)
      }
    }
  }
</script>
<style lang="scss">
  .table_slot /deep/ .ivu-table-title{
    height: 100px;
  }
  th{
    width: 222px;
  }
</style>
