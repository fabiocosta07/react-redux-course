import React from 'react';
import First from './components/basics/First';
import SecondWithParam from './components/basics/SecondWithParam'
import Fragment from './components/basics/Fragment';
import ThirdRandom from './components/basics/ThirdRandom';
import Card from './components/basics/layout/Card';
import './App.css'
import Family from './components/basics/Family';
import FamilyMember from './components/basics/FamilyMember';
import StudentsList from './components/list/StudentsList';
export default _ => 
   <div className="App">
      <h1>Fundamentos react</h1>
      <div className="Cards">
        <Card title="First" color="#3AB795">
          <First></First>
        </Card>
        <Card title="Second" color="#A0E8AF">
          <SecondWithParam 
            title="Student Result" 
            student="Ze" score={9}/>
        </Card>
        <Card title="Second with param" color="#86BAA1">
          <SecondWithParam 
            title="Student Result" 
            student="Jao" score={6.5}/>
        </Card>
        <Card title="Third Random" color="#EDEAD0">
          <ThirdRandom min="2" max="200"/>
        </Card>
        <Card title="Fragment" color="#ffcf56">
          <Fragment></Fragment>
        </Card>
        <Card title="Family" color="#E63946">
          <Family surname="Silva">
            <FamilyMember name="Ze" ></FamilyMember>
            <FamilyMember name="Joao" ></FamilyMember>
          </Family>
        </Card>

        <Card title="List" color="#457B9D">
          <StudentsList></StudentsList>
        </Card>

      </div>
   </div>


