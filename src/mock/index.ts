import Mock from 'mockjs'
// 验证码
Mock.mock('/phoneCode', 'get', {
  'code|100000-999999': 0
})
