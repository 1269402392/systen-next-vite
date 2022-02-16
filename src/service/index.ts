import LYRequest from './request'
// http://152.136.185.210:5000
const lyRequest = new LYRequest({
  baseURL: 'http://152.136.185.210:5000'
})

export const otherRequest = new LYRequest({})

export default lyRequest
