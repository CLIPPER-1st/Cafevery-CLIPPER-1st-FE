import {BrowserRouter} from 'react-router-dom';
import Router from './Router';
import {ThemeProvider} from 'styled-components';
import theme from './theme';
import {Suspense} from 'react';
import { ErrorBoundary } from "react-error-boundary";
import Splash from './components/Splash';

const App = () => {
  return (
    <ErrorBoundary fallback={<>에러 발생</>}>
      <Suspense fallback={<Splash />}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ThemeProvider>
      </Suspense> 
    </ErrorBoundary>
  );
};

export default App;
