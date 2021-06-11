export const cookieNames = {
  accessToken: 'access_token',
};

export const cookieManager = {
  getCookie(key: string) {
    const value = document.cookie.match(`(^|;) ?${key}=([^;]*)(;|$)`);
    return value ? decodeURIComponent(value[2]) : undefined;
  },
  setCookie(key: string, value: string, expiresIn: Date) {
    const cookie = `${encodeURIComponent(key)}=${encodeURIComponent(
      value,
    )};expires=${expiresIn.toUTCString()};path=/;SameSite=Strict;Secure`;
    document.cookie = cookie;
  },
  deleteCookie(key: string) {
    document.cookie = `${key}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
  },
};
