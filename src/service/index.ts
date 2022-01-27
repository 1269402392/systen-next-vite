import LYRequest from './request'
import cache from '../utils/cache'

const lyRequest = new LYRequest({
  baseURL: 'http://152.136.185.210:5000',
  interceptors: {
    requestInterceptors: (config) => {
      config.headers!.Authorization =
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6ImNvZGVydGVzdCIsInJvbGUiOnsiaWQiOjMsIm5hbWUiOiLov5DokKUifSwiaWF0IjoxNjQxMDk0ODQ4LCJleHAiOjE2NDM2ODY4NDh9.tqRClHUaT9qnAO4A0Vj3SuQzWNaLZkMhJbWX8pqZRuJI9teZFXfwFlGTyYfhFjoKECJclDRY8NPh3sAYbS5fyBe-U9EvjsU5mLT5udZvKkjNmniIfxIvP1LRRypjSMtsahw6EHTlEIgFmA185UYPwyDhFnyKtmV962vp_NH2iK8'
      return config
    }
  }
})

export const otherRequest = new LYRequest({})

export default lyRequest
