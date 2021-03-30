import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './index.scss';

import { ErrorBoundary } from './components/Common/ErrorBoundary';
import { Content } from './components/Common/Content';
import { ModalWrapper } from './components/Common/Modal';
import { Footer } from './components/Common/Footer';
import { Home } from './containers/Home';
import { Details } from './containers/Details';

function App() {
  return (
    <ErrorBoundary>

      <Router>
        <Switch>
          <Route path="/movie-details/:id">
          <Details/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>

      <Footer>
        <Content>
          <p>Copyright, 2021 (c)</p>
        </Content>
      </Footer>
      
      <ModalWrapper/>

    </ErrorBoundary>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);
