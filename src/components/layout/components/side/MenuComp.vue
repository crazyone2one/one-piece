<script setup lang="ts">
import { MenuOption, NIcon, NMenu } from 'naive-ui'
import { h } from 'vue'

/**
 * 处理菜单展开图标的渲染
 */
const expandIcon = () => {
  return h(NIcon, null, {
    default: () => h('span', { class: 'i-mdi:chevron-double-down' }),
  })
}
const menuOptions: MenuOption[] = [
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: () =>
      h(NIcon, null, {
        default: () => h('span', { class: 'i-mdi:monitor-dashboard' }),
      }),
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat',
      },
    ],
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    icon: () =>
      h(NIcon, null, {
        default: () => h('span', { class: 'i-my-icons:settings' }),
      }),
    children: [
      {
        label: '寻羊冒险记1',
        key: 'a-wild-sheep-chase1',
      },
      { label: '寻羊冒险记2', key: 'a-wild-sheep-chase2' },
    ],
  },
]
</script>
<template>
  <n-menu accordion :options="menuOptions" :expand-icon="expandIcon" />
</template>

<style scoped></style>
