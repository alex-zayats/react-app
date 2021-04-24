import React from 'react';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import thunk from 'redux-thunk';
import './index.scss';

import { ErrorBoundary } from './components/Common/ErrorBoundary';
import { Content } from './components/Common/Content';
import { ModalWrapper } from './components/Common/Modal';
import { NotFound } from './components/Common/NotFound';
import { Footer } from './components/Common/Footer';
import { Home } from './containers/Home';
import { Details } from './containers/Details';

import rootReducer from './reducers';

const mainStore = createStore(rootReducer, {}, applyMiddleware(thunk));

function App() {
  return (
    <ErrorBoundary>
      <Provider store={mainStore}>
        <Router>
          <Switch>
            
            <Route path="/movie-details/:id">
              <Details/>
            </Route>

            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="*">
              <NotFound/>
            </Route>

          </Switch>
        </Router>
      </Provider>

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
