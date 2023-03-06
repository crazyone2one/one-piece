<script setup lang="ts">
import { MenuOption, NIcon, NMenu } from 'naive-ui'
import { Component, h } from 'vue'
import { BookOutline as BookIcon } from '@vicons/ionicons5'
const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const menuOptions: MenuOption[] = [
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
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
    icon: renderIcon(BookIcon),
    disabled: true,
  },
]
</script>
<template>
  <n-menu :options="menuOptions" />
</template>

<style scoped></style>
