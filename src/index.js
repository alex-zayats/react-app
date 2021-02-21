import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import './App.css';

function Header1() {
  return (
    <div className="App">
      <header className="App-header">
      	Hello World Header 1
      </header>
    </div>
  );
}

class Header2 extends React.Component {
	render() {
		return (
		    <div className="App">
		      <header className="App-header">
		      	Hello World Header 2
		      </header>
		    </div>
		);
	}
}

class Header3 extends React.PureComponent {
	render() {
		return (
		    <div className="App">
		      <header className="App-header">
		      	Hello World Header 3
		      </header>
		    </div>
		);
	}
}

ReactDOM.render(
  <React.StrictMode>
    <Header1 />
    <Header2 />
    <Header3 />
    <div id="not-jsx"></div>
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(React.createElement(Header3), document.getElementById('not-jsx'));


reportWebVitals();