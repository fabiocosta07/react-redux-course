import React from 'react';
import First from './components/basics/First';
import SecondWithParam from './components/basics/SecondWithParam'
import Fragment from './components/basics/Fragment';
import ThirdRandom from './components/basics/ThirdRandom';
import Card from './components/basics/layout/Card';
import './App.css'
export default _ => 
   <div className="App">
      <h1>Fundamentos react</h1>
      <div className="Cards">
        <Card title="First">
          <First></First>
        </Card>
        <Card title="Second">
          <SecondWithParam 
            title="Student Result" 
            student="Ze" score={9}/>
        </Card>
        <Card title="Second with param">
          <SecondWithParam 
            title="Student Result" 
            student="Jao" score={6.5}/>
        </Card>
        <Card title="Third Random">
          <ThirdRandom min="2" max="200"/>
        </Card>
        <Card title="Fragment">
          <Fragment></Fragment>
        </Card>
      </div>
   </div>


