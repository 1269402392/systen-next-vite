type IFromType = 'text' | 'password' | 'select' | 'datepicker'

export interface IFrom {
  labelWidth?: string
  formItems: IFromItem[]
  colStyle?: any
  rules?: any
}

export interface IFromItem {
  type: IFromType
  filed: string //绑定的数据源
  label: string
  placeholder?: string
  options?: IOptionType[]
  isShow?: boolean
}

export interface IOptionType {
  label: string
  value: any
}
