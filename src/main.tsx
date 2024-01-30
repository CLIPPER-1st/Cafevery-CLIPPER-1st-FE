import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {RecoilRoot} from 'recoil';
import QueryClientContext from './contexts/QueryClientContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientContext>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </QueryClientContext>
  </React.StrictMode>,
)
