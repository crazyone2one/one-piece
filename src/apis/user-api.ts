import { IReqPage, IResultData, IPageResponse } from './interface'
import service from '/@/utils/http-common'

/**
 * 登录参数类型
 */
export interface IReqLogin {
  name: string
  password: string
}
export interface IUserInfo {
  id: string
  userId?: string
  email: string
  username?: string
  name: string
  phone: string
  token?: string
  password?: string
  status?: string
  lastWorkspaceId: string
  lastProjectId: string
  authorities: Array<{ authority: string }>
  source?: string
  isLocalUser?: boolean
}

/**
 * login api methods
 * @param params login parameters
 * @returns
 */
export const loginApi = async (
  params: IReqLogin
): Promise<IResultData<IUserInfo>> => {
  return await service.post('/user/login', params)
}
/**
 * 退出功能api
 * @returns
 */
export const logoutApi = () => {
  return service.get('user/logout')
}
