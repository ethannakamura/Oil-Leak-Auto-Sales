import './App.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Shop from './views/Shop';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  // creating app state using useState
  // const [<state_variable_name, <setter function>] = useState(<initial_value>);
  // setter changes the useState, use setter to mutate state
  // we don't want to redefine a state variable

  // state variable 'makes' is defined at app layer 
  // setting this state/mutating this state creates a re-render for everythign
  // in the app layer including the navbar and home route
  const [makes, setMakes] = useState(['Ford','Honda','Mazda','Mitsubishi','Ferrari']);

  // state of ea. comp. is accessed through suseState, a HOOK definining each 
  // state with the variable 'makes', mutated with the setter which causes 
  // components to re-render (by changing their state)
  // the setter and its variable are passed through the home comp. which
  // includes a func. that can mutate that state in Home.js.
  return (
    <div className="App">
      <Navbar />
  
      <Routes>
        <Route children path= '/' element={<Home makes = {makes} setMakes={setMakes}/>} />
        <Route children path= '/Shop' element={<Shop />} />
      </Routes>
    </div>
  );
}
    // we provide keys and values to become the props of home

export default App;
