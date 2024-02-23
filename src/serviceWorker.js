import {clientsClaim} from 'workbox-core';
import {ExpirationPlugin} from 'workbox-expiration';
import {precacheAndRoute, createHandlerBoundToURL} from 'workbox-precaching';
import {registerRoute} from 'workbox-routing';
import {StaleWhileRevalidate} from 'workbox-strategies';

clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(({request, url}) => {
  if (request.mode !== 'navigate') {
    console.log('returning false', request.mode);
    return false;
  }

  if (url.pathname.startsWith('/_')) {
    console.log('returning false', url.pathname);
    return false;
  }

  if (url.pathname.match(fileExtensionRegexp)) {
    console.log('returning false', url.pathname);
    return false;
  }

  return true;
}, createHandlerBoundToURL('/index.html'));

registerRoute(
  ({url}) =>
    url.origin === self.location.origin && url.pathname.endsWith('.png'),
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [new ExpirationPlugin({maxEntries: 50})],
  }),
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
