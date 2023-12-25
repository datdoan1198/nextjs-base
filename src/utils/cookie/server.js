import {cookies} from "next/headers";

export const AUTH_TOKEN_USER = 'token_user';
export const PROFILE_USER = 'profile_user';

export const setAuthToken = (token) => {
  return cookies().set({
    name: AUTH_TOKEN_USER,
    value: token
  });
}

export const getAuthToken = () => {
  const cookieStore = cookies()
  return cookieStore.get(AUTH_TOKEN_USER)
}

export const getHeaders = () => {
  let token = getAuthToken()?.value || '';
  return {
    "Authorization": `Bearer ${token || ''}`,
  }
}

export const setProfileUser = (authUser) => {
  return cookies().set({
    name: PROFILE_USER,
    value: authUser
  });
}

export const getProfileUser = () => {
  const cookieStore = cookies()
  return cookieStore.get(PROFILE_USER)
}

export const deleteCookie = (name) => {
  cookies().delete(name)
}
