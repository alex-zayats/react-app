import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { ErrorBoundary } from './components/ErrorBoundary';
import { Home } from './containers/Home';
import { Content } from './components/Content';
import { Footer } from './components/Footer';

function App() {
  return (
    <ErrorBoundary>
      <Home></Home>
      <Footer>
        <Content>
          <p>Copyright, 2021 (c)</p>
        </Content>
      </Footer>
    </ErrorBoundary>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);
