'use server'

import {getMe, handleLogin} from "@/api/auth";
import {
  AUTH_TOKEN_USER, PROFILE_USER,
  deleteCookie, getHeaders, setAuthToken, setProfileUser
} from "@/utils/cookie/server";

export async function actionLogin(data) {
  return await handleLogin(data).then(async (res) => {
    setAuthToken(res.data.data.access_token);
    await actionGetMe();
    return {
      data: res.data,
      isError: false
    }
  }).catch(error => {
    return {
      data: error.response.data,
      isError: true,
      statusCode: error.response.status
    }
  });
}

export async function actionGetMe() {
  return await getMe({}, getHeaders()).then(async (res) => {
    await setProfileUser(JSON.stringify(res.data.data));
  }).catch(() => {
    deleteCookie(AUTH_TOKEN_USER);
    deleteCookie(PROFILE_USER);
  });
}
