import { ILoginState } from '@/store/login/type'
import { ISystemState } from '@/store/main/system/type'
import { IAnalysisState } from '@/store/main/analysis/type'

export interface IRootData {
  departmentList: any[]
  roleList: any[]
  menuList: any[]
}

export interface IRootModule {
  login: ILoginState
  main: ISystemState
  analysis: IAnalysisState
}

export type IStoreType = IRootData & IRootModule
