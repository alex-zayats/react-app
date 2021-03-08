import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { ErrorBoundary } from './components/ErrorBoundary';
import { Header } from './components/Header';
import { Container } from './components/Container';
import { SearchInput } from './components/SearchInput';
import { MoviesCategories } from './components/MoviesCategories';
import { MoviesList } from './components/MoviesList';
import { Footer } from './components/Footer';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const currentTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#29b6f6',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    }
  }
});

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={currentTheme}>
        <Header>
          <Container>
            <h3 className="title">Find Your Movie</h3>
            <SearchInput/>
          </Container>
        </Header>
        <Container>
          <MoviesCategories/>
          <MoviesList/>
        </Container>
        <Footer>
          <Container>
            <p>Copyright, 2021 (c)</p>
          </Container>
        </Footer>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);
