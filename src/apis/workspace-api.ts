import { IReqPage, IResultData, IPageResponse } from './interface'
import { IUserInfo } from './user-api'
import service from '/@/utils/http-common'
export interface IWorkspace {
  id: string
  organizationId?: string
  name: string
  description: string
  memberSize?: number
}
// * 查询参数类型
interface IReqParams extends IReqPage {
  id?: string
}
/**
 * * 查询列表数据
 * @param params 查询参数
 * @returns
 */
export const getWorkspacePageData = async (
  params: IReqParams
): Promise<IResultData<IPageResponse<IWorkspace>>> => {
  const page = params.page
  const limit = params.limit
  return await service.post(`/workspace/list/all/${page}/${limit}`, params)
}
export const getWorkspaceMemberSpecial = async (
  param: object
): Promise<IResultData<IUserInfo[]>> => {
  return await service.post('/user/special/ws/member/list/all', param)
}
/**
 * * 添加workspace接口
 * @param param 参数
 * @returns
 */
export const addWorkspaceSpecial = async (
  param: IWorkspace
): Promise<IResultData<IWorkspace>> => {
  return await service.post('/workspace/special/add', param)
}
/**
 * 编辑workspace接口
 * @param param 参数
 * @returns
 */
export const updateWorkspaceSpecial = async (
  param: IWorkspace
): Promise<IResultData<IWorkspace>> => {
  return await service.post('/workspace/special/update', param)
}
