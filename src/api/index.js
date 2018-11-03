
import ajax from './ajax';

//请求登录的函数
export const reqLogin = data => ajax('/login', data, 'POST');

//请求注册函数
export const reqRegister = data => ajax('/register', data, 'POST');
