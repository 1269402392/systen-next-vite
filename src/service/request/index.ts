import cache from '@/utils/cache'
import axios, { AxiosInstance } from 'axios'
// import { ElLoading } from 'element-plus'
// import 'element-plus/theme-chalk/el-loading.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { LYRequestConfig, LYRequestHook } from './type'

const DEFAULT_LOADING = true

class LYRequest {
  instance: AxiosInstance
  interceptors?: LYRequestHook
  isShowLoading?: boolean
  loadingInstance: any
  constructor(config: LYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.isShowLoading = config.isShowLoading ?? DEFAULT_LOADING
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCache
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCache
    )

    this.instance.interceptors.request.use((config) => {
      config.headers!.Authorization = cache.getCache('token')
      if (this.isShowLoading) {
        // this.loadingInstance = ElLoading.service({
        //   text: 'Loading...'
        // })
        NProgress.start()
      }
      return config
    })
    this.instance.interceptors.response.use((result) => {
      // this.loadingInstance?.close()
      NProgress.done()
      return result.data
    })
  }

  request<T>(config: LYRequestConfig<T>): Promise<T> {
    if (config.isShowLoading === false) {
      this.isShowLoading = config.isShowLoading
    }
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res)
          // 初始化
          this.isShowLoading = DEFAULT_LOADING
        })
        .catch((error) => {
          reject(error)
          // this.loadingInstance.close()
          NProgress.done()
          this.isShowLoading = DEFAULT_LOADING
        })
    })
  }
  get<T = any>(config: LYRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }
  post<T = any>(config: LYRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T = any>(config: LYRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: LYRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default LYRequest
