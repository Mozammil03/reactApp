import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero';
// import ImgDis from './components/imgdis/ImgDis';
// import { useEffect } from 'react';
import Mines from './components/mines/Mines';

//controllers




function App() {
 


  return (
    <div className='app'>
      <div className='size'>
        {/* <ImgDis /> */}
        <Nav/>
        <Hero/>
        <Mines/>
      </div>
    </div>
    

  );
}

export default App;
