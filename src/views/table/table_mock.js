import Mock from 'mockjs'
export default Mock.mock("http://127.1.1.0:8080",{
  'array|4-10': [{
      'name'    : '@name',
      'age|20-23': 23,
      'sex|0-1': [
        1
      ],
      'switchSlot|1': true,
      '_checked': false
  }]
})
