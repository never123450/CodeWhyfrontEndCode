import { getUserListData } from '@/service/main/system'
import { defineStore } from 'pinia'
import type { ISystemState } from './type'

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersTotalCount: 0,
    usersList: []
  }),
  actions: {
    async getUserListDataAction(queryInfo: any) {
      console.log(queryInfo)
      // 1.请求用户列表数据
      const userListResult = await getUserListData(queryInfo)
      const { list, totalCount } = userListResult.data
      this.usersList = list
      this.usersTotalCount = totalCount
      console.log(list, totalCount)
    }
  }
})

export default useSystemStore
