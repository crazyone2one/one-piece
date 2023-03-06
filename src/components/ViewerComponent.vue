<script setup lang="ts">
import { useLoadingBar } from 'naive-ui'
import router from '/@/routers'
// todo: route transtion
const loadingBar = useLoadingBar()
router.beforeEach(() => loadingBar?.start())
router.afterEach(() => loadingBar?.finish())
</script>

<template>
  <router-view />
</template>

<style scoped></style>
