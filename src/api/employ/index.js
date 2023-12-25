import {apiAxios} from "@/api/rootApi";

export const getListEmployee = (data, headers = {}) => {
  return apiAxios({
    method: 'get',
    url: 'users',
    params: {},
    headers: headers
  })
}

export const createEmployee = (data = {}, headers = {}) => {
  return apiAxios({
    method: 'post',
    url: 'users',
    data: data,
    headers: headers
  })
}
