import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';


function App() {
  return (
    <div style={{background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4))'}}>
       <Navbar /> 
       <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Experience></Experience>
    </div>
  );
}

export default App;
