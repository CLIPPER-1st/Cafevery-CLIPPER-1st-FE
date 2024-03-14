import Cookies from 'js-cookie';

export default function useSetTokens(accessToken) {
  Cookies.set('accessToken', accessToken, { path: '/', domain: 'cafevery.site' });
}