<template>
  <div class="content">
    <ly-table
      v-bind="contentConfig"
      ref="lyTableRef"
      :table-data="dataList ?? []"
    >
      <!--  头部插槽  -->
      <template #header>
        <div class="header">
          <strong class="left">{{ contentConfig.title }}列表</strong>
          <div class="right">
            <el-button
              v-if="isDelete"
              size="small"
              type="danger"
              @click="batchClick"
            >
              <el-icon class="icon-size" :size="40"><circle-close /></el-icon>
              <span>批量删除</span>
            </el-button>
            <el-button
              v-if="isCreate"
              size="small"
              type="success"
              @click="insertClick"
            >
              <el-icon><circle-plus /></el-icon>
              <span>新增{{ contentConfig.title }}</span>
            </el-button>
          </div>
        </div>
      </template>
      <!--  用户状态插槽  -->
      <template #enable="scope">
        <el-tag
          size="small"
          :type="scope.row.enable === 0 ? 'info' : 'success'"
        >
          {{ scope.row.enable === 0 ? '禁用' : '启用' }}
        </el-tag>
      </template>
      <!--  其他动态插槽(由父页面决定独有的内容,例如商品的图片)  -->
      <template
        v-for="(item, index) in otherSlotName"
        :key="index"
        #[item.slotName]="scope"
      >
        <slot :name="item.slotName" :row="scope.row"></slot>
      </template>
      <!--  用户日期插槽   -->
      <template #createAt="scope">
        <strong>{{ $filter(scope.row.createAt) }}</strong>
      </template>
      <template #updateAt="scope">
        <strong>{{ $filter(scope.row.updateAt) }}</strong>
      </template>
      <!--  操作插槽    -->
      <template #handle="scope">
        <div class="btns">
          <el-button
            v-if="isUpdate"
            size="small"
            plain
            @click="editClick(scope.row)"
          >
            <el-icon> <edit></edit></el-icon>
            <span>修改</span>
          </el-button>
          <el-popconfirm
            v-if="isDelete"
            title="他只想安静的呆在列表里~"
            @confirm="deleteClick(scope.row)"
          >
            <template #reference>
              <el-button size="small" type="danger" plain>
                <el-icon><delete /></el-icon>
                <span>删除</span>
              </el-button>
            </template>
          </el-popconfirm>
        </div>
      </template>
      <!--   底部分页插槽   -->
      <template #footer>
        <el-pagination
          v-model:currentPage="pageInfo.currentPage"
          :page-sizes="[3, 5, 7]"
          :page-size="pageInfo.size"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </template>
    </ly-table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import LyTable from '@/components/ly-table'
import { useStore } from '@/store'
import { mapToPermission } from '@/utils/map-menus'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ITable } from '@/components/ly-table/type'

export default defineComponent({
  name: 'PageContent',
  components: { LyTable },
  props: {
    contentConfig: {
      type: Object as PropType<ITable>,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  emits: ['handleInsert', 'handleEdit'],
  setup(props, { emit }) {
    const store = useStore()
    const lyTableRef = ref<InstanceType<typeof LyTable>>()
    const pageInfo = ref({
      currentPage: 1,
      size: 3
    })
    // watch(
    //   () => pageInfo,
    //   () => getDataList(),
    //   { deep: true }
    // )
    const getDataList = (queryInfo?: any) => {
      store.dispatch('system/getDataListAction', {
        pageName: props.pageName,
        pageInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.size,
          size: pageInfo.value.size,
          ...queryInfo
        }
      })
    }
    getDataList()

    // 获取数据
    const dataList = computed(() =>
      store.getters['system/getDataList'](props.pageName)
    )

    const total = computed(() =>
      store.getters['system/getDataTotal'](props.pageName)
    )

    // 筛选动态插槽
    const otherSlotName = props.contentConfig.tableItems.filter(
      (item: any) =>
        item.slotName === 'imgUrl' ||
        item.slotName === 'url' ||
        item.slotName === 'parentId' ||
        item.slotName === 'departmentId' ||
        item.slotName === 'roleId'
    )

    // 分页
    const handleSizeChange = (val: number) => {
      pageInfo.value.size = val
      getDataList()
    }
    const handleCurrentChange = (val: number) => {
      pageInfo.value.currentPage = val
      getDataList()
    }

    // 操作
    const deleteClick = (row: any) => {
      store.dispatch('system/deleteDataAction', {
        id: row.id,
        pageName: props.pageName
      })
    }
    // 批量删除
    const batchClick = () => {
      ElMessageBox.confirm(
        `这可是批量删除${props.contentConfig.title}, 请深思!!!`,
        {
          confirmButtonText: '不顾一切',
          cancelButtonText: '还是算了',
          type: 'warning'
        }
      )
        .then(() => {
          const batchList = lyTableRef.value?.selectValues
          if (Object.keys(batchList as any).length > 0) {
            batchList?.forEach((item) => deleteClick(item))
          } else {
            ElMessage.warning('请选择删除的' + props.contentConfig.title)
          }
        })
        .catch(() => {
          ElMessage.info('感谢老板不杀之恩')
        })
    }
    const editClick = (row: any) => {
      emit('handleEdit', row)
    }
    const insertClick = () => {
      emit('handleInsert')
    }

    // 获取按钮权限
    const menuList = store.state.login.userMenus
    const isCreate = mapToPermission(
      menuList,
      `system:${props.pageName}:create`
    )
    const isDelete = mapToPermission(
      menuList,
      `system:${props.pageName}:delete`
    )
    const isUpdate = mapToPermission(
      menuList,
      `system:${props.pageName}:update`
    )
    return {
      dataList,
      otherSlotName,
      pageInfo,
      total,
      isCreate,
      isDelete,
      isUpdate,
      lyTableRef,
      handleSizeChange,
      getDataList,
      handleCurrentChange,
      deleteClick,
      insertClick,
      editClick,
      batchClick
    }
  }
})
</script>

<style scoped lang="less">
h3 {
  position: fixed;
  z-index: 999;
}
.content {
  margin-top: 10px;
  padding: 10px;
  box-sizing: border-box;
  background-color: white;
  z-index: 0;
  position: relative;
  min-width: 100%;
  .header {
    text-align: right;
    display: flex;
    justify-content: space-between;
    margin: 8px 20px 20px 0;
  }
  .el-pagination {
    margin: 18px 30px;
    text-align: right;
  }
}
</style>
