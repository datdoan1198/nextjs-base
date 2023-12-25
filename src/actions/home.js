'use server'

import {getListEmployee} from "@/api/employ";
import {
  AUTH_TOKEN_USER, PROFILE_USER,
  deleteCookie, getHeaders
} from "@/utils/cookie/server";

export async function getData() {
  return await getListEmployee({}, getHeaders()).then(res => {
    return res.data.data.data
  }).catch(async (error) => {
    if (error.response.status === 401) {
      deleteCookie(AUTH_TOKEN_USER);
      deleteCookie(PROFILE_USER);
    }
  })
}
