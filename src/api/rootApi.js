import axios from "axios";

const baseUrl = process.env.API_URL;
export const apiAxios = axios.create({
  baseURL: `${baseUrl}`,
  headers: {
    'Content-Type': 'application/json'
  }
});

apiAxios.interceptors.request.use((request) => {
  return request
},(error) => {
    return Promise.reject(error)
  }
);

apiAxios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});
