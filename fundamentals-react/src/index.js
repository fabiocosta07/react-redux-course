import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import First from './components/basics/First';
import SecondWithParam from './components/basics/SecondWithParam'

ReactDOM.render(
  <div>
    <First></First>
    <SecondWithParam title="title 1" subtitle="sub title 1"></SecondWithParam>
  </div>
  ,
  document.getElementById('root')
);
