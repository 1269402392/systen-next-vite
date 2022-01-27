import axios, { AxiosInstance } from 'axios'
import { ElLoading } from 'element-plus'
import 'element-plus/theme-chalk/el-loading.css'
import { LYRequestConfig, LYRequestHook } from './type'

const DEFAULT_LOADING = false

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
      if (this.isShowLoading) {
        this.loadingInstance = ElLoading.service({
          text: 'Loading...'
        })
      }
      return config
    })
    this.instance.interceptors.response.use((result) => {
      this.loadingInstance?.close()
      return result.data
    })
  }

  request<T>(config: LYRequestConfig<T>): Promise<T> {
    console.log()
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
          this.loadingInstance.close()
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
