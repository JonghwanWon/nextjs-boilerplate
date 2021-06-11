/**
 * 쿼리를 제외 한 pathname만을 반환합니다.
 */
export const withoutQuerystring = (pathname: string) => {
  const querystringRegex = /[?&]+([^=&]+)=([^&]*)/gi;

  return pathname.replace(querystringRegex, '');
};
