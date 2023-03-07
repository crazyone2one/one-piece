<script setup lang="ts">
import { h } from 'vue'
import { NSpace, NDropdown, NAvatar, NText, NButton } from 'naive-ui'
// import LangComp from '/@/components/layout/components/header/LangComp.vue'
const renderCustomHeader = () => {
  return h(
    'div',
    {
      style: 'display: flex; align-items: center; padding: 8px 12px;',
    },
    [
      h(NAvatar, {
        round: true,
        style: 'margin-right: 12px;',
        src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/demo1.JPG',
      }),
      h('div', null, [
        h('div', null, [h(NText, { depth: 2 }, { default: () => '打工仔' })]),
        h('div', { style: 'font-size: 12px;' }, [
          h(
            NText,
            { depth: 3 },
            { default: () => '毫无疑问，你是办公室里最亮的星' }
          ),
        ]),
      ]),
    ]
  )
}

const options = [
  {
    key: 'header',
    type: 'render',
    render: renderCustomHeader,
  },
  {
    key: 'header-divider',
    type: 'divider',
  },
  {
    label: '处理群消息 342 条',
    key: 'stmt1',
  },
  {
    label: '被 @ 58 次',
    key: 'stmt2',
  },
  {
    label: '加入群 17 个',
    key: 'stmt3',
  },
]
const handleSelect = (key: string | number) => {
  window.$message.info(String(key))
}
</script>
<template>
  <n-space justify="end" class="ml-auto">
    <div>
      <!-- <lang-comp /> -->
    </div>
    <div>
      <n-button
        text
        tag="a"
        href="https://github.com/crazyone2one/one-piece.git"
        target="_blank"
        type="primary"
      >
        Github
      </n-button>
    </div>
    <div>
      <n-dropdown trigger="hover" :options="options" @select="handleSelect">
        <n-avatar
          round
          size="small"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
      </n-dropdown>
    </div>
  </n-space>
</template>

<style scoped></style>
