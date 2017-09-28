import Mock from 'mockjs'
export default Mock.mock("http://127.1.1.0:8080",{
  'seriesData|7': [{
    'value|5-35': 35,
    'name|+1': [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday', 
      'Sunday'
    ],
  }],
  'legendData': [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday', 
    'Sunday'
  ],
  'color': [
    "#2ec7c9",
    "#b6a2de",
    "#5ab1ef",
    '#ffb980', 
    '#8d98b3', 
    '#d87a80', 
    '#ef5055'
  ]
})