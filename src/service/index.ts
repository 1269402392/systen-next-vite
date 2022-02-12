import LYRequest from './request'
import cache from '../utils/cache'

const lyRequest = new LYRequest({
  baseURL: 'http://152.136.185.210:5000',
  interceptors: {
    requestInterceptors: (config) => {
      config.headers!.Authorization =
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6ImNvZGVydGVzdCIsInJvbGUiOnsiaWQiOjMsIm5hbWUiOiLov5DokKUifSwiaWF0IjoxNjQzODAyNTc5LCJleHAiOjE2NDYzOTQ1Nzl9.D8vSnLf5bhj9L-EOdn_unio0pVXV7c9hMBjMF30Qz_Zr5sDLR80FKbye8qpF452zXr5LT8cAm9KGsgKLDFlHvyQ1Xm-SJoJvJKz8LyEcoZ4HSg89tLm9dPfnDmey5X0nIs7Rv29HM8qYm0ZEGJZ-7cW3u7Qr6H9eA-ex4ByHp4w'
      return config
    }
  }
})

export const otherRequest = new LYRequest({})

export default lyRequest
