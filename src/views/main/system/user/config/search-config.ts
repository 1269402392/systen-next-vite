import { ISearchType } from '@/components/page-search/type'

const searchConfig: ISearchType = {
  form: {
    labelWidth: '100px',
    formItems: [
      {
        label: '用户名',
        type: 'text',
        placeholder: '请输入用户名',
        filed: 'name'
      },
      {
        label: '真实姓名',
        type: 'text',
        placeholder: '请输入真实姓名',
        filed: 'realname'
      },
      {
        label: '电话号码',
        type: 'text',
        placeholder: '请输入电话号码',
        filed: 'cellphone'
      },
      {
        label: '用户状态',
        type: 'select',
        placeholder: '请选择用户状态',
        options: [
          {
            label: '启用',
            value: '1'
          },
          {
            label: '禁用',
            value: '0'
          }
        ],
        filed: 'enable'
      },
      { label: '创建时间', type: 'datepicker', filed: 'createAt' }
    ]
  }
}

export default searchConfig
