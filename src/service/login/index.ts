import { ILogin, ILoginResult } from './type'
import lyRequest from '../index'
import { IDataType } from '../type'

enum LoginAPI {
  userLogin = '/login',
  userInfo = '/users/',
  userMenus = '/role/'
}

export function loginRequest(user: ILogin) {
  return lyRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.userLogin,
    data: user
  })
}

export function getUserInfo(id: number) {
  return lyRequest.get<IDataType>({
    url: LoginAPI.userInfo + id
  })
}

export function getUserMenus(id: number) {
  return lyRequest.get<IDataType>({
    url: LoginAPI.userMenus + id + '/menu'
  })
}
