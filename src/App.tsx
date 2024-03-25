import {BrowserRouter} from 'react-router-dom';
import Router from './Router';
import {ThemeProvider} from 'styled-components';
import theme from './theme';
import {Suspense} from 'react';
import { ErrorBoundary } from "react-error-boundary";
import Splash from './components/common/Splash';
import ToastContainer from '@/components/common/ToastContainer';
import useScrollToTop from '@/hooks/useScrollToTop';

const App = () => {
  useScrollToTop();

  return (
    <ErrorBoundary fallback={<Splash />}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ThemeProvider>
        <ToastContainer />
    </ErrorBoundary>
  );
};

export default App;
