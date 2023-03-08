<script setup lang="ts">
import { MenuOption, NIcon, NMenu } from 'naive-ui'
import { h, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink, useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()
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
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: 'Project',
              },
            },
            { default: () => t('commons.project') }
          ),
        key: 'project',
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: 'Workspace',
              },
            },
            { default: () => t('commons.workspace') }
          ),
        key: 'workspace',
      },
    ],
  },
]
const activeKey = ref<string | null>(route.path.split('/')[2])
/**
 * 点击菜单。选中菜单的回调，key 是选中菜单项的 key
 * @param key 菜单key
 */
const handleSelect = (key: string) => {
  activeKey.value = key
}
</script>
<template>
  <n-menu
    v-model:value="activeKey"
    accordion
    :options="menuOptions"
    :expand-icon="expandIcon"
    @update:value="handleSelect"
  />
</template>

<style scoped></style>
