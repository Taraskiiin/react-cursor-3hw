import React from "react";
import Timer from "./Timer/Timer.js";

function App(){
    return <div className="App">
      <Timer
      time={10}
      speed= {1000}
      start= {false}/>
    </div>;
}
export default App;
