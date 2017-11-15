<template>
  <div>
    <Button type="primary" @click="print">打印</Button>
    <Table :columns="columns1" border  :data="data2" id="print" ref="table"></Table>
  </div>
</template>
<script>

  export default {
    data () {
      return {
        columns1: [
            {
                title: 'Name',
                key: 'name'
            },
            {
                title: 'Age',
                key: 'age'
            },
            {
                title: 'Address',
                key: 'address'
            }
        ],
        data2: [
            {
                name: 'John Brown',
                age: 18,
                address: 'New York No. 1 Lake Park',
                date: '2016-10-03'
            },
            {
                name: 'Jim Green',
                age: 24,
                address: 'London No. 1 Lake Park',
                date: '2016-10-01'
            },
            {
                name: 'Joe Black',
                age: 30,
                address: 'Sydney No. 1 Lake Park',
                date: '2016-10-02'
            },
            {
                name: 'Jon Snow',
                age: 26,
                address: 'Ottawa No. 2 Lake Park',
                date: '2016-10-04'
            }
        ]
      }
    },
    methods:{
      print : function () {
        let tablePrint = this.$refs.table.$el.innerHTML
        let oPop = window.open('','oPop');  
        let str = '<!DOCTYPE html>'  
            str +='<html>'  
            str +='<head>'  
            str +='<meta charset="utf-8">'  
            str +='<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">'  
            str+='<style>';  
            str+='.ivu-table-cell{text-align: center; padding: 18px 0} .ivu-table-border th, .ivu-table-border td{border: 1px solid #e9eaec;}';
            str+='.ivu-table th{height: 40px;background-color: #f8f8f9} th .ivu-table-cell{padding: 0}';  
            str+='</style>';  
            str +='</head>'  
            str +='<body>'  
            str +='</body>'  
            str +='</html>'     
        oPop.document.write(str);
        oPop.document.body.innerHTML=tablePrint; 
        oPop.print();  
        oPop.close(); 
      }
    }
  }
</script>
<style>
</style>
