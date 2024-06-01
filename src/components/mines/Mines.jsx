import './Mines.css';
import React, { useEffect, useRef } from 'react';

// Define the fun function to return 9 div elements
let numTile = 16;
let cloneEl =[];
const fun = () => {
  const elements = [];

  for (let i = 1; i <= numTile; i++) {
    elements.push(<div className="tiles" key={i}>{i}</div>);
  }
  cloneEl = elements;
  return elements;
};


const Mines = () => {
  const tilesContainerRef = useRef(null);
  const tilesRef = useRef(null);
  //kkkjjk
 

  const change = () =>{
    const cre = document.querySelectorAll('.tiles');
    cre.forEach((ea) => ea.style.color = 'lightgreen');

    for(let i = 0; i<Math.sqrt(numTile);i++){
      
      let rand = Math.floor(Math.random() * numTile);
      
      cre[rand].style.color = 'red';
      


    }
  }
  const reset =() => {
    const cre = document.querySelectorAll('.tiles');
    cre.forEach((ea) => ea.style.color = 'white');
  }
 


  useEffect(() => {
    const tilesContainer = tilesContainerRef.current;
    

    if (tilesContainer) {
      const wire = () => {
        const el = [];
        for (let i = 0; i < Math.sqrt(numTile); i++) {
          el.push('auto');
        }
        return el.join(' ');
      };

      tilesContainer.style.gridTemplateColumns = wire();
    }
    //random color chng
    
    
   

    
  }, []);




  return (
    <div className="minesContainer">
      <h1 className="headd">The Guess Game</h1>
      <div className="tilesContainer" ref={tilesContainerRef}>
        {fun()}
      </div>
      <div className="butt">
      
        <div className="reveal btn" onClick={change} disabled>
        Reveal
      </div>
      <div className="reset btn" onClick={reset}>Reset</div>
      
      </div>
    </div>
    
  );
};

export default Mines;
