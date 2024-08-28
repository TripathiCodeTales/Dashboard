import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';

const details = {
 CSPM: {
  widget1 :[
      { id: 0, value: 50, label: 'connected' , isChecked: 'true'},
      { id: 1, value: 50, label: 'not connected', isChecked: 'true'},
      // {id:2, value:10, label:'unconnected', isChecked:'false'},
      // {id:3, value:40, label: 'somewhat connected', isChecked:'false'}
  ],
  
  widget2: [
      { id: 0, value: 1689, label: 'passed',isChecked:'true' },
      { id: 1, value: 36, label: 'Not available',isChecked:'true' },
      { id: 2, value: 68, label: 'warning',isChecked:'true' },
      { id: 3, value: 1689, label: 'failed',isChecked:'true' },
      // {id:4, value:100, label:'maybe passed', isChecked:'false'},
      // {id:5, value:400, label: 'unconnected', isChecked:'false'}
  ], 
  widget3:[
      {id:0, value:10, label:'unconnected'},
      {id:1, value:40, label: 'somewhat connected'},
      {id:2, value:50, label:'connects'}
  ]
 }}
function App() {
  const[list,setList] =useState(details)

const handleOnChange= (event,item) => {
  const updatedList = details.map((detail)=>{
    if(task.title === item.title){
      if(event.target.checked=== true){
        task.isChecked='true'
      }else {
        task.isChecked = 'false'
      }
      return task
    } else{
      return task
    }
  })
  setList(updatedList)
}


console.log(list);
  return (
    <div className="App">
      <div className='parent'>
      <Header className='head' />
      <Content handleOnChange={handleOnChange} detail = {list}/>                                           
      </div>
       
    </div>
  );
}

export default App;
