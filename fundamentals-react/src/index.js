import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import First from './components/basics/First';
import SecondWithParam from './components/basics/SecondWithParam'

ReactDOM.render(
  <div>
    <First></First>
    <SecondWithParam 
      title="Student Result" 
      student="Ze" score={9}/>
    <SecondWithParam 
      title="Student Result" 
      student="Jao" score={6.5}/>
  </div>
  ,
  document.getElementById('root')
);
