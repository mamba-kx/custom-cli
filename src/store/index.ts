import { defineStore } from 'pinia'
import handleError from '@/api/handleRequest'
import api from '@/api/index'

export const useStore = defineStore('storeID', {
  state: () => ({
    info: ''
  }),

  getters: {
    reverseInfo(): string {
      return (this.info = 'world')
    }
  },

  actions: {
    async getInfo() {
      const [res, err] = await handleError(api.getUserInfo({}))
      if (!err) {
        return (this.info = res.data)
      }
      console.error(err)
    },
    setInfo() {
      this.info = this.info.toUpperCase()
    }
  }
})
