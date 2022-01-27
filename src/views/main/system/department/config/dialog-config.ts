import { IDialogType } from '@/components/page-dialog/type'

const dialogConfig: IDialogType = {
  title: '部门',
  form: {
    formItems: [
      {
        type: 'text',
        filed: 'id',
        label: 'id',
        placeholder: '请输入id',
        isShow: true
      },
      {
        type: 'text',
        filed: 'name',
        label: '部门名称',
        placeholder: '请输入部门名称'
      },
      {
        type: 'select',
        filed: 'parentId',
        label: '上级部门',
        placeholder: '请选择上级部门',
        options: []
      },
      {
        type: 'text',
        filed: 'leader',
        label: '领导名称',
        placeholder: '请输入领导名称'
      }
    ],
    rules: {
      name: [
        {
          required: true,
          message: '请输入部门名',
          trigger: 'blur'
        },
        {
          min: 2,
          max: 8,
          message: 'Length should be 2 to 8',
          trigger: 'blur'
        }
      ],
      parentId: [
        {
          required: true,
          message: '请选择上级部门',
          trigger: 'change'
        }
      ],
      leader: [
        {
          required: true,
          message: '请输入领导名称',
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
export default dialogConfig
