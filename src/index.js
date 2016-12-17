import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Table from './Components/Table';


import {Router, Route, browserHistory} from 'react-router';
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/table" component={Table}/>
    </Router>,
  document.getElementById('root')
);


