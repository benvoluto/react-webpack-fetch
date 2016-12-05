import ReactDOM from 'react-dom';
import React from 'react';
import List from './containers/list';
import Header from './components/header/header';

require('./app.scss');

const view = (
  <div className="content">
    <Header />
    <div className="main">
      <List />
    </div>
  </div>
);

ReactDOM.render(
  view, document.getElementById('app')
);
