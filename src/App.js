import './App.css';
import {  useState } from 'react';

function App() {

  const [points, setPoints] = useState([]);
  const [poppedPoints, setPoppedPoints] = useState([]);

  
  

  function handleClick(e){
    const {clientX,clientY} = e
    setPoints([...points, {
      x: clientX,
      y: clientY
    }])
  }

  function handleUndo() {
    const newArray = [...points]
    if(newArray.length === 0) return;
    setPoppedPoints([...poppedPoints, newArray.pop()])
    setPoints(newArray)
  }
  
  function handleRedo() {
    if(poppedPoints.length === 0) return;
    setPoints([...points,poppedPoints.pop()])
  }



  return (
    <>
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleRedo}>Redo</button>
      <div className="App" style={{height: "100vh"}} onClick={handleClick}>

      {points.map((point, index) => {

        return (
        <div key={index} style={
          {position: "absolute", 
          left: point.x - 5 + "px", 
          top: point.y - 5 + "px",
          borderRadius: "50%",
          background: "red",
          height: "10px",
          width: "10px"}
          }>
        </div>)
      })}
      </div>


    </>
  );
}

export default App;
