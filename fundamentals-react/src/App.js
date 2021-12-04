import React from 'react';
import First from './components/basics/First';
import SecondWithParam from './components/basics/SecondWithParam'
import Fragment from './components/basics/Fragment';

export default function(props) {
  return (
   <div id="app">
      <h1>Fundamentos react 2</h1>
      <First></First>
      <SecondWithParam 
        title="Student Result" 
        student="Ze" score={9}/>
      <SecondWithParam 
        title="Student Result" 
        student="Jao" score={6.5}/>
      <Fragment></Fragment>
   </div>
 );
}

