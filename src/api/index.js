/**
 * @Description:
 * @author BY
 * @date 2019/9/30-8:19
 */
import ajax from './ajax'

const BASE_URL = '/api';

// 测试
export const giveSomeJson = () => ajax(BASE_URL + '/giveSomeJson');
// 注册
export const register = (username, email, password, rePassword) => ajax(BASE_URL + '/register', {
    username,
    email,
    password,
    rePassword
}, 'POST');
// 登录
export const login = (username, password, captcha) => ajax(BASE_URL + '/login', {username, password, captcha}, 'POST');
// 用户登出
export const logout = () => ajax(BASE_URL + '/loginOut');
// 获取所有运营人员列表
export const operateListReq = () => ajax(BASE_URL + '/users/operateList');
// 添加运营人员
// 删除运营人员
export const deleteOperateUser = (id) => ajax(BASE_URL + '/users/deleteOperateUser', {id});
// 查找运营人员
export const findOperateUser = (operateName) => ajax(BASE_URL + '/users/findOperateUser', {operateName}, 'POST');


