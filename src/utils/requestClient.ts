import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

// TODO: BASE_URL
export const BASE_URL = '';

export const initAxiosConfig = () => {
  axios.defaults.baseURL = BASE_URL;
  axios.defaults.withCredentials = true;
};

type FetcherConfig<D = any> = Omit<AxiosRequestConfig<D>, 'method'> & {
  method?: Method;
};

export const fetcher = async <T = any, D = any>(config: FetcherConfig<D>) => {
  const response = await axios.request<T, AxiosResponse<T>, D>(config);
  return response.data;
};
