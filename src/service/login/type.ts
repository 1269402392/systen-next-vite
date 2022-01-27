export interface ILogin {
  name: string
  password: string
}

export interface ILoginResult {
  id: number
  name: string
  token: string
}
