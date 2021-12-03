import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import First from './components/basics/First';
import SecondWithParam from './components/basics/SecondWithParam'
import Fragment from './components/basics/Fragment';

ReactDOM.render(
  <div>
    <First></First>
    <SecondWithParam 
      title="Student Result" 
      student="Ze" score={9}/>
    <SecondWithParam 
      title="Student Result" 
      student="Jao" score={6.5}/>
    <Fragment></Fragment>
  </div>
  ,
  document.getElementById('root')
);
