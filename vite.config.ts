import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import UnoCSS from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import { presetAttributify, presetUno } from 'unocss'
import fs from 'node:fs/promises'

const pathResolve = (dir: string) => {
  return path.resolve(__dirname, '.', dir)
}
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite 配置
    plugins: [
      vue(),
      UnoCSS({
        presets: [
          presetAttributify({
            /* preset options */
          }),
          presetUno(),
          // https://github.com/unocss/unocss/tree/main/packages/preset-icons#configuration
          presetIcons({
            extraProperties: {
              display: 'inline-block',
              'vertical-align': 'middle',
            },
            collections: {
              custom: {
                alarm:
                  '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20a7 7 0 0 1-7-7a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7m0-16a9 9 0 0 0-9 9a9 9 0 0 0 9 9a9 9 0 0 0 9-9a9 9 0 0 0-9-9m.5 4H11v6l4.75 2.85l.75-1.23l-4-2.37V8M7.88 3.39L6.6 1.86L2 5.71l1.29 1.53l4.59-3.85M22 5.72l-4.6-3.86l-1.29 1.53l4.6 3.86L22 5.72Z"/></svg>',
                /* ... */
              },

              'my-icons': {
                // load your custom icon lazily
                logo: () =>
                  fs.readFile('./src/assets/one-piece-logo.svg', 'utf-8'),
                /* ... */
                settings: () =>
                  fs.readFile('./src/assets/icons/settings.svg', 'utf-8'),
              },
            },
            // customizations: {
            //   iconCustomizer(collection, icon, props) {
            //     if (['custom', 'my-icons', 'mdi'].concat(collection)) {
            //       props.width = '2em'
            //       props.height = '2em'
            //     }
            //     // customize this icon in this collection
            //     if (collection === 'my-icons' && icon === 'settings') {
            //       props.width = '1em'
            //       props.height = '1em'
            //     }
            //   },
            // },
          }),
        ],
      }),
    ],
    resolve: {
      alias: [
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
      ],
    },
    // 服务器选项
    server: {
      host: true,
      proxy: {
        // 带选项写法：http://localhost:5173/api/bar -> http://jsonplaceholder.typicode.com/bar
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_APP_PROXY_URL,
          changeOrigin: true,
          rewrite: (path) =>
            path.replace(new RegExp('^' + env.VITE_APP_BASE_API), ''),
        },
      },
    },
    css: {
      // CSS模块化配置
      modules: {},
      // CSS预处理器配置
      preprocessorOptions: {},
    },
    // 构建选项
    build: {},
    define: {
      __APP_ENV__: env.APP_ENV,
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: false,
      __INTLIFY_PROD_DEVTOOLS__: false,
    },
  }
})
