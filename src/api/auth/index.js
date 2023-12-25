import {apiAxios} from "@/api/rootApi";

export const handleLogin = (data = {}) => {
  return apiAxios({
    method: 'post',
    url: 'auth/login',
    data: data,
  })
}

export const getMe = (data = {}, headers = {}) => {
  return apiAxios({
    method: 'get',
    url: 'me',
    data: {},
    headers: headers
  })
}
