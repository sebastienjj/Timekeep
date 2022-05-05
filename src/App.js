import React,{useState,useEffect} from 'react';

import logo from './logo.svg';
import './App.css';
 function  App() {
   let x

  const[data,setData]=useState()
  const getData = async () => {
     const response =  await (await fetch("http://localhost:4000/api/v1/countyTable",
        {
          mode: "cors"
        }
      )).json()
      setData(response)
     
  }
  useEffect(
    () =>{getData()
    }, [])
    data?console.log(data):x=null
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       {data?
       <p>
         {JSON.stringify(data.slice(0,10))}
         </p>:
         <p/>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
