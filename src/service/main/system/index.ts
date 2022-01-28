import lyRequest from '@/service'
import { IDataType } from '@/service/type'

export function getDataList(url: string, data?: any) {
  return lyRequest.post<IDataType>({
    url,
    data
  })
}

export function deleteData(pageName: string, id: number) {
  return lyRequest.delete<IDataType>({
    url: `/${pageName}/${id}`
  })
}

export function insertData(url: string, data?: any) {
  return lyRequest.post<IDataType>({
    url,
    data
  })
}

export function updateData(url: string, data?: any) {
  return lyRequest.patch<IDataType>({
    url,
    data
  })
}
// 处理get请求 dispose - 安排
export function disposeGetRequest(url: string, data?: any) {
  return lyRequest.get<IDataType>({ url, data })
}
