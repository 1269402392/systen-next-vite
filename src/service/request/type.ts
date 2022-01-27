import { AxiosRequestConfig } from 'axios'

export interface LYRequestHook<T = any> {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCache?: (error: any) => any
  responseInterceptors?: (result: any) => T
  responseInterceptorsCache?: (error: any) => any
}

export interface LYRequestConfig<T = any> extends AxiosRequestConfig {
  interceptors?: LYRequestHook<T>
  isShowLoading?: boolean
}
