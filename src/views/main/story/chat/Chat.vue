<template>
  <div class="chat">
    <div style="border: 1px solid #ccc">
      <Toolbar
        :editor-id="editorId"
        :default-config="toolbarConfig"
        :mode="mode"
        style="border-bottom: 1px solid #ccc"
      />
      <Editor
        :editor-id="editorId"
        :default-config="editorConfig"
        :default-content="getDefaultContent"
        :default-html="defaultHtml"
        :mode="mode"
        style="height: 500px"
      />
      <!-- 注意: defaultContent (JSON 格式) 和 defaultHtml (HTML 格式) ，二选一 -->
    </div>
  </div>
</template>

<script>
import { computed, onBeforeUnmount } from 'vue'
import {
  Editor,
  Toolbar,
  getEditor,
  removeEditor
} from '@wangeditor/editor-for-vue'
import * as _ from 'lodash'

export default {
  components: { Editor, Toolbar },
  setup() {
    const editorId = `w-e-${Math.random().toString().slice(-5)}` //【注意】编辑器 id ，要全局唯一

    // defaultContent (JSON 格式) 和 defaultHtml (HTML 格式) ，二选一
    const defaultHtml = '一行文字'
    const defaultContent = [
      { type: 'paragraph', children: [{ text: '一行文字' }] }
    ]
    const getDefaultContent = computed(() => _.cloneDeep(defaultContent)) // 注意，要深拷贝 defaultContent ，否则报错

    const toolbarConfig = {}
    const editorConfig = { placeholder: '请输入内容...' }

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
      const editor = getEditor(editorId)
      if (editor == null) return

      editor.destroy()
      removeEditor(editorId)
    })

    return {
      editorId,
      mode: 'default',
      defaultHtml,
      getDefaultContent,
      toolbarConfig,
      editorConfig
    }
  }
}
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>
