import axios, { AxiosResponse, InternalAxiosRequestConfig, AxiosError, AxiosRequestConfig } from "axios";
import { ElMessage } from "element-plus";
import { getMessageInfo } from "./status";

interface BaseResponse<T = any> {
  code: number | string;
  data: T;
  message: string;
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15000,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use((response: AxiosResponse) => {
  if (response.status !== 200) {
    ElMessage({
      type: 'error',
      message: getMessageInfo(response.status)
    })
  }
  return response.data;
},
  (error: any) => {
    const { response } = error;
    if (response) {
      ElMessage({
        type: 'error',
        message: getMessageInfo(response.status)
      })

      return Promise.reject(response.data);
    }
    ElMessage({ type: 'error', message: '网络异常' })
  }
);

const requestInstance = <T = any>(config: AxiosRequestConfig): Promise<T> => {
  const conf = config;
  return new Promise((resolve, reject) => {
    axiosInstance.request<any, AxiosResponse<BaseResponse>>(conf).then((res: AxiosResponse<BaseResponse>) => {
      const data = res.data;
      if (data.code !== 200) {
        ElMessage({
          type: 'error',
          message: data.message
        })
        reject(data.message);
      } else {
        ElMessage({
          type: 'success',
          message: data.message
        })
        resolve(data.data as T);
      }
    })
  });
}

export function get<T = any, U = any>(config: AxiosRequestConfig, url: string, params?: U): Promise<T> {
  return requestInstance({ ...config, url, method: 'GET', params });
};

export function post<T = any, U = any>(config: AxiosRequestConfig, url: string, data?: U): Promise<T> {
  return requestInstance({ ...config, url, method: 'POST', data });
};
