import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {RecoilRoot} from 'recoil';
import QueryClientContext from './contexts/QueryClientContext';
import {GlobalStyle} from './style';
import {initMocks} from './mocks';

async function enableMocking() {
  if (!import.meta.env.DEV) {
    return;
  }
  return initMocks();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
      <QueryClientContext>
        <RecoilRoot>
          <App />
          <GlobalStyle />
        </RecoilRoot>
      </QueryClientContext>
  );
});
