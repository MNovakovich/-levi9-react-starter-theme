import BaseHttpService from './base-http.service';
const baseHttp = BaseHttpService();

const AuthService = () => {
   const signin = async(username:string, password:string) => {
    const result = await baseHttp.post(`auth/login`, { username, password });
    if (result.status === 200 || result.status === 201) {
      const accessToken = result.data.token;
      baseHttp.saveToken(accessToken);
    }
    return result;
  }

  const signout = () => {
    baseHttp.removeToken();
  }
  
  return {
    signin,
    signout
  }

}

export default AuthService;