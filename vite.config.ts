import { resolve } from 'path'

export default {
  base: '/JS_NEW/',
  build: {
    rollupOptions: {
      input: {
        // @ts-ignore
        main: resolve(__dirname, 'index.html'),
        // @ts-ignore
        idbm: resolve(__dirname, 'idbm.html'),
      }
    }
  }
}