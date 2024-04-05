import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import DataFetch from './components/DataFetch';
import ComponentX from './components/ComponentX';
import Title1 from './components/Title1';
import Title2 from './components/Title2';

export const TopLevelContext = React.createContext();

function App() {

   const initialState = 0;
   const [count, setCount] = useState(initialState);
   const [numbers, setNumbers] = useState([]);

   const increaseByTwo = () => {
     for (let i=0; i < 2; i++) {
      setCount(Siree => Siree + 1);
     }
   }

   const  setArray = () =>{
    setNumbers(
    [
      ...numbers,
      {
        id:numbers.length,
        value:Math.round(Math.random() + 1000)
      }
    ]
    );
   }

   useEffect(
    () => {
      document.title = `click : ${count}`;
    }
   )
  return (
    <div className="App">
      <header>Learn React Hooks</header>
      <h4>Value of count : {count}</h4>
      <button onClick={() => setCount(count + 1)}> +Increase count</button>
      <button onClick={() => setCount(count - 1)}> -Decrease count</button>
      <button onClick={increaseByTwo}>Increase by two</button>
      <br />
      <br />
      <Title1/>
      <Title2/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={setArray}>Add Number</button>
      {numbers.map((item) => {
        return (
          <div key={item.id}>
            {item.id} : {item.value}
          </div>
        );
      })}
      <DataFetch />
      <TopLevelContext.Provider value={"I am Top Level !!"}>
        <ComponentX />
      </TopLevelContext.Provider>
    </div>
  );
}

export default App;
