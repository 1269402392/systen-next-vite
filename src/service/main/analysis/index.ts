import lyRequest from '@/service'
import { IDataType } from '@/service/type'

export function runGetRequest(url: string, data?: any) {
  return lyRequest.get<IDataType>({
    url,
    data
  })
}
