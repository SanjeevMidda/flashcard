import './index.css';
import Flashcard from "./components/Flashcard"
import { useState } from 'react';

function App() {

  let numbers = [["하나", "one"], ["둘","two"], ["셋","three"], ["다섯","four"]]
  let colors = [["빨간색","red"], ["파란색","blue"], ["초록색","green"], ["노란색","yellow"]]
  let clothes = [["바지", "trousers"], ["양말", "socks"], ["운동화", "trainers"], ["옷", "clothes"]];

  const [showContent, setShowContent] = useState(0);

  function showNumbers(){
    setShowContent(1);
  }

  function showColors(){
    setShowContent(2);
  }

  function showClothes(){
    setShowContent(3);
  }
  return (
  <div className="App">
    <div className="container">
      <div className="title">
        <h1>Korean</h1>
        <h1>Flashcard</h1>
        <h1>App.</h1>
      </div>
      

     

      <div className="content">

      <div className="options">
        <h4 onClick={showNumbers}>#numbers</h4>
        <h4 onClick={showColors}>#colors</h4>
        <h4 onClick={showClothes}>#clothes</h4>
      </div>

        {
          showContent === 1 && numbers.map((number) => {
            return <Flashcard korean={number} key={number}/>
          })
          
        }

        {
          showContent === 2 && colors.map((color) => {
            return <Flashcard korean={color} key={color}/>
          })        }

        {
          showContent === 3 && clothes.map((cloth) => {
            return <Flashcard korean={cloth} key={cloth}/>
          })        }
      </div>
        
      </div>
    </div>
  );
}

export default App;

// flip button - english - korean