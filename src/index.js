import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { Header } from './components/Header';

function App() {
  return (
    <>
      <Header/>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);
