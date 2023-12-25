import {getCookieClient} from "@/utils/helper";

export const AUTH_TOKEN_ADMIN = 'token_admin';
export const AUTH_USER_ADMIN = 'auth_user_admin';

export const setAuthToken = (token) => {
  return document.cookie = `${AUTH_TOKEN_ADMIN}=${token}`;
}

export const removeAuthToken = () => {
  return document.cookie = AUTH_TOKEN_ADMIN + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

export const getHeaders = () => {
  let token = getCookieClient(AUTH_TOKEN_ADMIN);
  return {
    "Authorization": `Bearer ${token || ''}`,
  }
}

export const setAuthUser = (authUser) => {
  return document.cookie = `${AUTH_USER_ADMIN}=${authUser}`;
}

export const removeAuthUser = () => {
  return document.cookie = AUTH_USER_ADMIN + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

