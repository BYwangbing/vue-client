/**
 * @Description:
 * @author BY
 * @date 2019/9/30-8:19
 */
import ajax from './ajax'
const BASE_URL = '/api';

// 测试
export const giveSomeJson = () => ajax(BASE_URL+'/giveSomeJson');
// 注册
export const register = (username, email, password, rePassword) => ajax(BASE_URL + '/users/register', {username, email, password, rePassword}, 'POST');
// 登录
export const login = (username, password) => ajax(BASE_URL + '/users/login', {username, password}, 'POST');
