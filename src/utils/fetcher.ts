import fetch from 'isomorphic-fetch';

export const fetcher = async <Response>(
  url: string,
  init?: RequestInit,
): Promise<Response> => {
  const response = await fetch(url, { ...init });

  if (!response.ok) {
    // ERROR
    throw new Error();
  }
  const data = await response.json();
  return data;
};
