<script setup lang="ts">
import { NResult, NButton } from 'naive-ui'
</script>
<template>
  <n-result
    status="info"
    title="Dashboard"
    description="在这个年代，信息就是金钱，金钱就是信息。"
  >
    <template #footer>
      <n-button>我需要信息</n-button>
    </template>
  </n-result>
</template>

<style scoped></style>
