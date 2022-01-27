import { IDialogType } from '@/components/page-dialog/type'

const dialogConfig: IDialogType = {
  title: '用户',
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
        label: '用户名',
        placeholder: '请输入用户名'
      },
      {
        type: 'text',
        filed: 'realname',
        label: '真实姓名',
        placeholder: '请输入真实姓名'
      },
      {
        type: 'password',
        filed: 'password',
        label: '密码',
        placeholder: '请输入密码'
      },
      {
        type: 'text',
        filed: 'cellphone',
        label: '电话号码',
        placeholder: '请输入电话号码'
      },
      {
        type: 'select',
        filed: 'departmentId',
        label: '部门',
        options: [],
        placeholder: '请选择部门'
      },
      {
        type: 'select',
        filed: 'roleId',
        label: '角色',
        options: [],
        placeholder: '请选择角色'
      }
    ],
    rules: {
      name: [
        {
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        },
        {
          min: 2,
          max: 8,
          message: 'Length should be 2 to 8',
          trigger: 'blur'
        }
      ],
      realname: [
        {
          required: true,
          message: '请输入真实姓名',
          trigger: 'blur'
        },
        {
          min: 2,
          max: 8,
          message: 'Length should be 2 to 8',
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: '请输入用户密码',
          trigger: 'blur'
        },
        {
          max: 16,
          message: 'Length should be 16',
          trigger: 'blur'
        }
      ],
      cellphone: [
        {
          required: true,
          message: '请输入手机号码',
          trigger: 'blur'
        },
        {
          min: 2,
          max: 11,
          message: 'Length should be 2 to 11',
          trigger: 'blur'
        }
      ],
      departmentId: [
        {
          required: true,
          message: '请选择部门',
          trigger: 'change'
        }
      ],
      roleId: [
        {
          required: true,
          message: '请选择角色',
          trigger: 'change'
        }
      ]
    },
    colStyle: {
      span: 24
    }
  }
}
export default dialogConfig
