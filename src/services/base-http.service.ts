import axios from 'axios';

const { REACT_APP_BASE_API_URL } = process.env;

const BaseHttpService = () => {
  let BASE_URL = REACT_APP_BASE_API_URL;
  let _accessToken: string | null = null;

  const get = async (endpoint:string, options = {}) => {
    options = {...options, ..._getCommonOptions()};
    return await axios.get(`${BASE_URL}/${endpoint}`, options)
      .catch(error => _handleHttpError(error));
  }

  const post = async (endpoint:string, data = {}, options = {}) => {
    options = {...options, ..._getCommonOptions()};
    return axios.post(`${BASE_URL}/${endpoint}`, data, options)
      .catch(error => _handleHttpError(error));
  }

  const put = async (endpoint:string, data = {}, options = {}) => {
    options = {...options, ..._getCommonOptions()};
    return axios.put(`${BASE_URL}/${endpoint}`, data, options)
      .catch(error => _handleHttpError(error));
  }

  const deletee = async (endpoint:string, options = {}) => {
    options = {...options, ..._getCommonOptions()};
    return axios.delete(`${BASE_URL}/${endpoint}`, options)
      .catch(error => _handleHttpError(error));
  }

  const patch = async (endpoint:string, data = {}, options = {}) => {
    options = {...options, ..._getCommonOptions()};
    return axios.patch(`${BASE_URL}/${endpoint}`, data, options)
      .catch(error => _handleHttpError(error));
  }

  const _handleHttpError = (error:any) => {
    const { statusCode } = error.response.data;
    if (statusCode !== 401) {
        return error.response;
      } else {
        _handle401();
      }
  }

  const _handle401 = () => {
   // navigate("/about-us");
  }

  const _getCommonOptions = () => {
    const token = loadToken();

    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  const getAccessToken = () => {
    return _accessToken ? _accessToken : loadToken();
  }

  const saveToken = (accessToken:string) => {
    _accessToken = accessToken;
    return localStorage.setItem('accessToken', accessToken);
  }

  const loadToken = () => {
    const token = localStorage.getItem('accessToken');
    _accessToken = token;
    return token;
  }

  const removeToken = () => {
    localStorage.removeItem('accessToken');
  }

  return {
    get,
    post,
    put,
    deletee,
    patch,
    getAccessToken,
    saveToken,
    loadToken,
    removeToken
  };
}

export default BaseHttpService;
