export interface ITable {
  tableItems: ITableItem[]
  isSelection?: boolean
  isIndex?: boolean
  isFooter?: boolean
  isExpand?: boolean
  title?: string
}

export interface ITableItem {
  label: string
  prop: string
  width?: string
  slotName: string
}
