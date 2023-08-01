import hyRequest from '..'

/** 用户的网络请求 */
export function getUserListData(queryInfo: any) {
  return hyRequest.post({
    url: '/users/list',
    data: queryInfo
  })
}
