<script setup lang="ts">
import {
  FormInst,
  FormRules,
  NForm,
  NFormItem,
  NButton,
  NH1,
  NCheckbox,
  NInput,
} from 'naive-ui'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const title = import.meta.env.VITE_APP_TITLE
const isRemember = ref(false)
const loading = ref(false)
const { t } = useI18n()
const formRef = ref<FormInst | null>(null)
const model = ref<{ name: string | null; password: string | null }>({
  name: 'admin',
  password: '123456',
})
const rules: FormRules = {
  name: [
    {
      required: true,
      message: t('commons.input_login_username'),
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: t('commons.input_password'),
      trigger: 'blur',
    },
    {
      min: 6,
      max: 30,
      message: t('commons.input_limit', [6, 30]),
      trigger: 'blur',
    },
  ],
}
</script>
<template>
  <div class="flex min-h-full items-center justify-center py-12 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div class="flex flex-col items-center justify-around">
        <img
          class="h-12 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <n-h1
          class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
        >
          {{ title }}
        </n-h1>
      </div>
      <n-form ref="formRef" :model="model" :rules="rules">
        <n-form-item path="name">
          <n-input
            v-model:value="model.name"
            autofocus
            :placeholder="$t('commons.account')"
            :maxlength="20"
          >
            <template #prefix>
              <!-- <div class="i-carbon:user-avatar" mr-5 /> -->
            </template>
          </n-input>
        </n-form-item>
        <n-form-item path="password">
          <n-input
            v-model:value="model.password"
            type="password"
            show-password-on="mousedown"
            :placeholder="$t('commons.password')"
            :maxlength="20"
          >
            <template #prefix>
              <!-- <div class="i-ic:round-lock-person" mr-5 /> -->
            </template>
          </n-input>
        </n-form-item>
        <div>
          <n-checkbox
            :checked="isRemember"
            label="记住我"
            :on-update:checked="(val:boolean) => (isRemember = val)"
          />
        </div>

        <div>
          <n-button
            type="primary"
            :loading="loading"
            class="group relative flex w-full justify-center rounded-md py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            登 录
          </n-button>
        </div>
      </n-form>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  background-image: url('/@/assets/login_bg.svg');
}
</style>
