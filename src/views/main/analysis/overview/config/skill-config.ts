interface ISkillType {
  label: string
  value: string
  link?: string
  iconCpn?: string
}

export const skillList: ISkillType[] = [
  {
    label: '开发工具',
    value: 'Webstorm IDE-2021.3.1',
    link: 'https://www.jetbrains.com/zh-cn/webstorm/',
    iconCpn: 'Apple'
  },
  {
    label: '编程语言',
    value: 'Vue-3.x + TypeScript-4.x',
    link: 'https://v3.cn.vuejs.org/',
    iconCpn: 'Baseball'
  },
  {
    label: '构建工具',
    value: 'Vite-2.x / Webpack-5.x',
    link: 'https://vitejs.cn/',
    iconCpn: 'Cherry'
  },
  {
    label: '路由工具',
    value: 'VueRouter-4.x',
    link: 'https://next.router.vuejs.org/zh/index.html',
    iconCpn: 'Chicken'
  },
  {
    label: '状态管理',
    value: 'VueX-4.x',
    link: 'https://next.vuex.vuejs.org/zh/index.html',
    iconCpn: 'Cloudy'
  },
  {
    label: 'UI框架',
    value: 'Element Plus',
    link: 'https://element-plus.gitee.io/zh-CN/',
    iconCpn: 'Connection'
  },
  {
    label: '可视化图形',
    value: 'Echarts-5.x',
    link: 'https://echarts.apache.org/zh/index.html',
    iconCpn: 'Compass'
  },
  {
    label: '富文本',
    value: 'WangEditor',
    link: 'https://www.wangeditor.com/v5/',
    iconCpn: 'DataAnalysis'
  },
  {
    label: '工具库',
    value: 'Lodash.js + Dayjs + CountUp.js + Mitt.js',
    link: 'https://www.lodashjs.com/',
    iconCpn: 'Food'
  },
  {
    label: 'CSS预编译',
    value: 'Less / Sass',
    link: 'https://less.bootcss.com/',
    iconCpn: 'Fries'
  },
  {
    label: 'HTTP工具',
    value: 'Axios',
    link: 'https://github.com/axios/axios',
    iconCpn: 'IceCreamRound'
  },
  {
    label: 'Git Hook 工具',
    value: 'husky',
    link: 'https://github.com/typicode/husky',
    iconCpn: 'Lightning'
  },
  {
    label: '代码规范',
    value: 'EditorConfig + Prettier + Eslint',
    link: 'https://eslint.bootcss.com/',
    iconCpn: 'OfficeBuilding'
  },
  {
    label: '自动部署',
    value: 'Centos + Jenkins + Nginx',
    link: 'https://www.centos.org/',
    iconCpn: 'Present'
  },
  {
    label: '接口测试工具',
    value: 'Postman',
    link: 'https://www.postman.com/',
    iconCpn: 'SetUp'
  },
  {
    label: '浏览器',
    value: 'Chrome',
    link: 'https://www.google.cn/chrome/',
    iconCpn: 'Trophy'
  }
]

export const fieldConfig: ISkillType[] = [
  {
    label: '文件夹',
    value: '统一小写，多个单词用`-`分割'
  },
  {
    label: '文件(.ts 、.vue 、.d.ts)',
    value: '统一小写，多个单词用`-`分割'
  }
]
export const componentConfig: ISkillType[] = [
  {
    label: '组件的文件',
    value: '统一小写, 多个单词使用`-`分割'
  },
  {
    label: '组件的目录结构',
    value: '例如 button 组件：button/src/index.vue, 统一在button/index.ts导出'
  },
  {
    label: '组件导包顺序',
    value: 'vue技术栈的包 , 第三方的工具函数 , 本地的组件, 本地的工具函数'
  },
  {
    label: '组件的名称',
    value: '统一采用大驼峰命名'
  },
  {
    label: '组件属性顺序',
    value: 'name, components, props, emits, setup,  ...'
  },
  {
    label: 'template标签',
    value: '小写加 - ( 例如：<case-panel/> )'
  },
  {
    label: 'template标签属性顺序',
    value: 'v-if , v-for , ref, class, style, ... ,事件'
  },
  {
    label: '组件的props',
    value: '小写开头，驼峰命名，必须编写类型默认值'
  },
  {
    label: '组件的样式',
    value:
      '作用域：scoped, lang = scss / less ; 类名：统一小写, 多个单词使用-分割'
  }
]

export const gitConfig: ISkillType[] = [
  {
    label: 'add-暂存区',
    value: 'git add'
  },
  {
    label: 'commit-提交',
    value: 'yarn commit'
  },
  {
    label: 'push-上传',
    value: 'git push'
  }
]
