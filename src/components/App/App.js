import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import {
  StaticRouter as Router,
  // BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import thunk from 'redux-thunk';

import { ErrorBoundary } from 'src/components/Common/ErrorBoundary';
import { Content } from 'src/components/Common/Content';
import { ModalWrapper } from 'src/components/Common/Modal';
import { NotFound } from 'src/components/Common/NotFound';
import { Footer } from 'src/components/Common/Footer';
import { Home } from 'src/containers/Home';
import { Details } from 'src/containers/Details';

import rootReducer from 'src/reducers';

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

export { App };
