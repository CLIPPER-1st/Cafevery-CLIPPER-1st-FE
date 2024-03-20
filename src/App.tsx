import {BrowserRouter} from 'react-router-dom';
import Router from './Router';
import {ThemeProvider} from 'styled-components';
import theme from './theme';
import {Suspense} from 'react';
import { ErrorBoundary } from "react-error-boundary";
import Splash from './components/common/Splash';
import ToastContainer from '@/components/common/ToastContainer';
import useScrollToTop from '@/hooks/useScrollToTop';
import { useRecoilState } from 'recoil';
import { showSplashState } from '@/atoms/showSplashState';

const App = () => {
  useScrollToTop();
  const [showSplash ,setShowSplash] = useRecoilState(showSplashState);

  return (
    <ErrorBoundary fallback={<Splash />}>
      <Suspense fallback={<Splash />}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ThemeProvider>
        <ToastContainer />
      </Suspense> 
    </ErrorBoundary>
  );
};

export default App;
