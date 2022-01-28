import Mock from 'mockjs'

Mock.mock('/phoneCode', 'get', {
  'code|100000-999999': 0
})
