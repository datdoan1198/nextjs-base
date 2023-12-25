'use server'

import {createEmployee} from "@/api/employ";
import {revalidatePath} from "next/cache";
import {getHeaders, setProfileUser} from "@/utils/cookie/server";

export async function handleCreateEmployee(data = {}) {
  return createEmployee(data, getHeaders()).then(res => {
    revalidatePath('/');
    return {
      data: res.data,
      isError: false
    }
  }).catch(error => {
    return {
      data: error.response.data,
      isError: true
    }
  });
}

export async function handleDemo(data = {}) {
  setProfileUser();
}
