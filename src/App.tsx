import {BrowserRouter} from 'react-router-dom';
import Router from './Router';
import {ThemeProvider} from 'styled-components';
import theme from './theme';
import {Suspense} from 'react';
import { ErrorBoundary } from "react-error-boundary";

const App = () => {
  return (
    <ErrorBoundary fallback={<>에러 발생</>}>
      <Suspense fallback={<>Loading...</>}>
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
