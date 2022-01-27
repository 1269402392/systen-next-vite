import { IDialogType } from '@/components/page-dialog/type'

export const dialogConfig: IDialogType = {
  title: '新增角色',
  form: {
    formItems: [
      {
        type: 'text',
        filed: 'id',
        isShow: true,
        label: ''
      },
      {
        type: 'text',
        filed: 'name',
        label: '角色名',
        placeholder: '请输入角色名'
      },
      {
        type: 'text',
        filed: 'intro',
        label: '描述',
        placeholder: '请输入描述'
      }
    ],
    rules: {
      name: [
        {
          required: true,
          message: '请输入角色名',
          trigger: 'blur'
        },
        {
          min: 2,
          max: 8,
          message: 'Length should be 2 to 8',
          trigger: 'blur'
        }
      ],
      intro: [
        {
          required: true,
          message: '请输入描述',
          trigger: 'blur'
        },
        {
          min: 2,
          max: 8,
          message: 'Length should be 2 to 8',
          trigger: 'blur'
        }
      ]
    },
    colStyle: {
      span: 24
    }
  }
}
