import { otherRequest } from '@/service'

export function handleGetRequest(url: string, data?: any) {
  return otherRequest.get({ url, data })
}
