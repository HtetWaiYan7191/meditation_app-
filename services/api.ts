import axios, { AxiosError } from "axios";

export const IP_ADDRESS = "localhost:3001";
export const BASEURL = `https://${IP_ADDRESS}/api/v1`;
export const BASEURL_V2 = `https://${IP_ADDRESS}/api/v2`;

export const requestHeaders = () => {
  return {
    headers: {
      "Content-Type": "application/json",
    },
  };
};

export const requestHeadersWithToken = (token: string | null) => {
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
};

interface ApiCallParams {
  params?: Record<string, any>;
  data?: any;
  url: string;
  headers: Record<string, string>;
  method: "GET" | "POST" | "PUT" | "DELETE";
}

export const callApiV1 = async ({
  data,
  url,
  headers,
  method,
  params,
}: ApiCallParams): Promise<any> => {
  try {
    const response = await axios({
      url: `${BASEURL}${url}`,
      method,
      headers,
      data,
    });
    return response;
  } catch (e) {
    const err = e as AxiosError;
    return {
      error: true,
      message: err.message,
      status: err.response?.status,
      data: err.response?.data,
    };
  }
};

export const callApiV2 = async ({
  data,
  url,
  headers,
  method,
  params,
}: ApiCallParams): Promise<any> => {
  try {
    const response = await axios({
      url: `${BASEURL_V2}${url}`,
      method,
      headers,
      data,
    });
    return response;
  } catch (e) {
    const err = e as AxiosError;
    return {
      error: true,
      message: err.message,
      status: err.response?.status,
      data: err.response?.data,
    };
  }
};
