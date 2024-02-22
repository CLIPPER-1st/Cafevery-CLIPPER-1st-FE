import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {RecoilRoot} from 'recoil';
import {GlobalStyle} from './style';
import {initMocks} from './mocks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

async function enableMocking() {
  if (!import.meta.env.VITE_APP_NODE_ENV) {
    return;
  }
  return initMocks();
}

const queryClient = new QueryClient({
  defaultOptions: {
      queries: {
          refetchOnWindowFocus: false,
          retry: 0,
      },
  },
});

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <App />
          <GlobalStyle />
        </RecoilRoot>
        <ReactQueryDevtools />
    </QueryClientProvider>,

  );
});